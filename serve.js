const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Open your browser to http://localhost:${port}`);
});
