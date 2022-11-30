const express = require('express');
const app = express();
const path = require('path');
app.use('/', express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));
const port = 3000;

app.get('/',(req, res) => {
    res.send('/public/index.html');
})

app.listen(port);