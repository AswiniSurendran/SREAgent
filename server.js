const http = require('http');
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <h1>✅ Azure Web App Demo</h1>
    <p>Deployed from GitHub successfully 🚀</p>
    <button onclick="alert('Working!')">Click me</button>
  `);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
