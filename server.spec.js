const request = require('supertest');
const server = require('./server');

describe('sever.js', () => {
    it('should return "welcome to wonderlist"', async () => {
        const welcome = await request(server).get('/');
        expect(welcome.text).toBe('Welcome to Wonderlist');
    });
});