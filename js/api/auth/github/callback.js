import fetch from "node-fetch";

export default async function handler(req, res) {
  const code = req.query.code;
  
  if (!code) {
    return res.status(400).send("No code provided");
  }
  
  try {
    // Exchange code for access token
    const tokenResponse = await fetch(`https://github.com/login/oauth/access_token`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new URLSearchParams({
        client_id: "Ov23liZ7NQJpEfJ5tA0F",
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: code
      })
    });
    
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;
    
    if (!accessToken) {
      return res.status(400).send("Failed to get access token");
    }
    
    // Get GitHub user data
    const userResponse = await fetch("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    
    const userData = await userResponse.json();
    
    res.send(`<h1>Hello ${userData.login}!</h1><p>You are now logged in with GitHub.</p>`);
    
  } catch (error) {
    res.status(500).send("Error during GitHub OAuth: " + error.message);
  }
}