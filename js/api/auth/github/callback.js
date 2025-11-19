import fetch from "node-fetch";

export default async function handler(req, res) {
  const code = req.query.code;
  
  if (!code) {
    return res.status(400).send("No code provided");
  }
  
  try {
    // Exchange code for access token
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new URLSearchParams({
        client_id: "Ov23liZ7NQJpEfJ5tA0F", // public
        client_secret: process.env.GITHUB_CLIENT_SECRET, // private in Vercel
        code: code
      })
    });
    
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;
    
    if (!accessToken) {
      return res.status(400).send("Failed to get access token");
    }
    
    // Fetch user info
    const userResponse = await fetch("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    
    const userData = await userResponse.json();
    
    // Redirect to index.html after successful login
    res.redirect(`/index.html?username=${encodeURIComponent(userData.login)}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}