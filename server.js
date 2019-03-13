const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();
const authRoute = require('./auth/authentication');
const listsRoute = require('./lists/lists')

server.use(cors({ origin: "https://youthful-hawking-cef0ae.netlify.com/", credentials: true }));
server.use(helmet());
server.use(express.json());


server.use('/api', authRoute);
server.use('/api/lists', listsRoute);

server.get('/', (req, res) => {
    res.send('Welcome to Wonderlist');
});

module.exports = server;