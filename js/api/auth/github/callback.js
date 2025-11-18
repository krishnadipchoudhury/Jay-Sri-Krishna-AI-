import fetch from "node-fetch";

export default async function handler(req, res) {
  const code = req.query.code;
  
  const tokenResponse = await fetch(
    `https://github.com/login/oauth/access_token`,
    {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new URLSearchParams({
        client_id: "Ov23liZ7NQJpEfJ5tA0F",
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: code
      })
    }
  );
  
  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;
  
  const userResponse = await fetch("https://api.github.com/user", {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  
  const userData = await userResponse.json();
  res.send(`Hello ${userData.login}!`);
}