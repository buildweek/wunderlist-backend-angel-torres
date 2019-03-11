require('dotenv').config();
const server = require('./server');

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`\n\n * * * Listening on port ${port} * * * \n\n`)
})