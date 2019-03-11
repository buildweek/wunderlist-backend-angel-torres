const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();
const authRoute = require('./authentication/authentication');

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/api/auth', authRoute);

server.get('/api', (req, res) => {
    res.send('Welcome to Wonderlist');
});

module.exports = server;