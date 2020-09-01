const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => res.send("Hello qq"));

app.listen(port);