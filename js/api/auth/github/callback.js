import fetch from "node-fetch";

export default async function handler(req, res) import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const code = req.query.code;
    
    if (!code) {
      return res.status(400).send("Error: No code provided by GitHub.");
    }
    
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
    
    if (!tokenData.access_token) {
      return res.status(400).send("Error: Failed to get access token from GitHub.");
    }
    
    const accessToken = tokenData.access_token;
    
    // Fetch user info from GitHub
    const userResponse = await fetch("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    
    const userData = await userResponse.json();
    
    // Send a simple welcome message or redirect to your app
    res.send(`Hello ${userData.login}! You have successfully logged in with GitHub.`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error during GitHub login.");
  }
}