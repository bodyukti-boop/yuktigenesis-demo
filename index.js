// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// serve a simple homepage
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><meta charset="utf-8"><title>Yuktigenesis Demo</title></head>
      <body>
        <h1>Hello from Yuktigenesis!</h1>
        <p>Dynamic server time: ${new Date().toLocaleString()}</p>
        <p>Try the API: <a href="/api/message">/api/message</a></p>
      </body>
    </html>
  `);
});

// a small dynamic JSON API endpoint
app.get('/api/message', (req, res) => {
  res.json({
    message: 'Hello — this is a dynamic response from Yuktigenesis!',
    time: new Date().toISOString()
  });
});

// start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
