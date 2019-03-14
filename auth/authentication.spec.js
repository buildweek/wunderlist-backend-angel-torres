// const request = require('supertest');
// const server = require('../server.js');
// const db = require('../data/knexConfig.js');

// describe('authentication.js', () => {
//     afterEach( async () => {
//         await db('users').truncate();
//         await db('lists').truncate();
//     });

//     it('should return retun list of users', async () => {
//         const newUser = {
//             username:"john",
//             password:"smith"
//         }
//         const addUser = await db('users').insert(newUser);
//         const userList = await db('users');
//         //const users = await request(server).get('/users');
//         expect(users).toEqual({})
//     });
// });