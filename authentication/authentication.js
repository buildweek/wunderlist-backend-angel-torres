const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
    res.send('welcome to authentication')
})

module.exports = route;