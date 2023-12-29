// server.js
const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Respond with "index.html" for requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
