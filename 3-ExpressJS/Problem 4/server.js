// The HTTP GET method is used to request data from a server. It's often used to retrieve information or resources from a specified URL.

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000);