const request = require('supertest');
const server = require('./server');
const db = require('./data/knexConfig.js')

describe('sever.js', () => {

    it('should return "welcome to wonderlist"', async () => {
        const welcome = await request(server).get('/');
        expect(welcome.text).toBe('Welcome to Wonderlist');
    });

    describe('authentication.js', () => {
    afterEach( async () => {
        await db('users').truncate();
        await db('lists').truncate();
    });

    it('should return retun list of users', async () => {
        const newUser1 = {
            username:"john",
            password:"smith"
        }
        const newUser2 = {
            username:"johnny",
            password:"smith"
        }
        try {
        const addUser1 = await db('users').insert(newUser1);
        const addUser2 = await db('users').insert(newUser2);
        const userList = await db('users');
            const users = await request(server).get('/api/users')
            console.log(users.body)
            expect(users.body).toHaveLength(2)
        } catch (error) {
            console.log(error)
        }   
    });
});
});
