const express = require('express');
const app = express();

app.get('/hello-word', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.get('/hello', (req,res) => {
    res.json({ message: 'Welcome to the API' });
})

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

module.exports = app;