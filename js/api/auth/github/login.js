// /api/auth/github/login.js

export default function handler(req, res) {
  // 🔹 Get GitHub OAuth details from environment variables
  const client_id = process.env.GITHUB_CLIENT_ID; // Example: Ov23liZ7NQJpEfJ5tA0F
  const redirect_uri = process.env.GITHUB_REDIRECT_URI; // Example: https://jay-sri-krishna-ai-51re.vercel.app/api/auth/github/callback
  
  // 🔹 Validate environment variables
  if (!client_id || !redirect_uri) {
    return res.status(500).send("Error: GitHub OAuth environment variables are missing.");
  }
  
  // 🔹 Construct GitHub OAuth URL
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`;
  
  // 🔹 Redirect user to GitHub login page
  res.redirect(githubAuthUrl);
}