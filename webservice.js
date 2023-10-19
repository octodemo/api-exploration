const express = require('express');
const app = express();

app.get('/user/:username', (req, res) => {
    const username = req.params.username;
    console.log(username);
    res.send(`Hello, ${username}!`);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});