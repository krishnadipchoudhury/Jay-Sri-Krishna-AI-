export default async function handler(req, res) {
  try {
    const code = req.query.code;
    if (!code) return res.status(400).send("Error: No code provided by GitHub.");
    
    // Exchange code for access token
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new URLSearchParams({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: code
      })
    });
    
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;
    
    if (!accessToken) return res.status(400).send("Error: Failed to get access token from GitHub.");
    
    // Fetch user info
    const userResponse = await fetch("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    
    const userData = await userResponse.json();
    
    // Redirect back to index.html with username as query parameter
    res.redirect(`/index.html?user=${userData.login}`);
    
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error during GitHub login.");
  }
}