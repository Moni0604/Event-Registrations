// back.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Registration POST endpoint
app.post('/register', (req, res) => {
  const { name, email, githubUsername } = req.body;

  if (!name || !email || !githubUsername) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  console.log('New Registration:', req.body);

  // In real projects, save to a database here
  res.status(200).json({ message: 'Registration successful!' });
});

// Server listen
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
