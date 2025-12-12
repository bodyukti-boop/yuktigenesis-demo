// index.js
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


// serve static assets from /public
app.use(express.static(path.join(__dirname, 'public')));


// root: send index.html
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// small dynamic JSON API endpoint
app.get('/api/message', (req, res) => {
res.json({
message: "Hello — this is a dynamic response from Yuktigenesis!",
time: new Date().toISOString()
});
});


app.listen(port, () => {
console.log(`Server listening on http://localhost:${port}`);
});
