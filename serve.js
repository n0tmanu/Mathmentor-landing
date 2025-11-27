const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle client-side routing - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, host, () => {
  console.log(`MathMentor server running at http://${host}:${port}`);
  console.log(`Access restricted to: ${host}`);
  if (host === '127.0.0.1') {
    console.log('✅ Server is secured to localhost only');
  }
});
