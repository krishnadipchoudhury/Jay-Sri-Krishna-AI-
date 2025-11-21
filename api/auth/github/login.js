export default function handler(req, res) {
  const client_id = process.env.GITHUB_CLIENT_ID;
  const redirect_uri = process.env.GITHUB_REDIRECT_URI;
  
  if (!client_id || !redirect_uri) {
    return res.status(500).send("Environment variables missing");
  }
  
  const url =
    `https://github.com/login/oauth/authorize` +
    `?client_id=${client_id}` +
    `&redirect_uri=${redirect_uri}`;
  
  res.redirect(url);
}