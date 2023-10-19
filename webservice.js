const express = require('express');
const app = express();

// create a get / endpoint that returns hello world

app.get('/', (req, res) => {
    // print request originating ip address

    console.log(req.ip);

    console.log(req.query);

    res.send('Hello NYIT LETS GO API DEVELOPMENT!');
});


app.get('/user/:username', (req, res) => {
    const username = req.params.username;
    console.log(username);
    res.send(`Hello, ${username}!`);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});