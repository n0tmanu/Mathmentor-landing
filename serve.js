const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle client-side routing - serve index.html for all non-API routes
app.use((req, res, next) => {
  // Skip API routes
  if (req.path.startsWith('/api/') || req.path === '/api') {
    return next();
  }

  // Skip static assets
  if (req.path.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/)) {
    return next();
  }

  // For all other routes, serve the React app
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, host, () => {
  console.log(`🚀 MathMentor server running at http://${host}:${port}`);
  console.log(`🔒 Access restricted to: ${host}`);
  if (host === '127.0.0.1') {
    console.log('✅ Server is secured to localhost only');
  }
  console.log(`📁 Serving static files from: ${path.join(__dirname, 'dist')}`);
});
