export default async function handler(req, res) {
  try {
    const code = req.query.code;
    if (!code) {
      return res.status(400).send("GitHub did not return a code.");
    }
    
    // Exchange code → access token
    const tokenRes = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: new URLSearchParams({
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code
        })
      }
    );
    
    const tokenData = await tokenRes.json();
    
    if (!tokenData.access_token) {
      return res.status(500).send("Failed to get GitHub token.");
    }
    
    const accessToken = tokenData.access_token;
    
    // Fetch GitHub user
    const userRes = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "User-Agent": "Vercel-App"
      }
    });
    
    const user = await userRes.json();
    
    // Redirect to homepage
    res.redirect(`/index.html?user=${encodeURIComponent(user.login)}`);
    
  } catch (err) {
    console.error("Callback error:", err);
    res.status(500).send("Server crashed inside callback.");
  }
}