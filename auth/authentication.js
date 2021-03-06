const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const route = express.Router();

const db = require('../data/knexConfig');

const secret = process.env.SECRET || "there are no secrets here"

function generateToken(user) {
    const payload = {
        userId: user.id
    }

    const options = {
        expiresIn: '1hr'
    }

    return jwt.sign(payload, secret, options);
}

route.get('/users', async (req, res) => {
    const users = await db('users');
    const filteredUsers = users.map(u => ({id:u.id, username:u.username}))
    res.status(200).json(filteredUsers);
});

route.post('/register', async (req, res) => {
    const user = req.body
    if (user.username && user.password) {
        try {
            const hash = bcryptjs.hashSync(user.password, 14);
            user.password = hash;
            const [id] = await db('users').insert(user);
            res.status(201).json({id});
        } catch (error) {
            res.status(500).json({message: error})
        }
    } else {
        res.status(400).json({message:"please provide username and password"});
    }
});

route.post('/login', async (req, res) => {
    const {username, password} = req.body
    if (username && password) {
        try {
            const user = await db('users').where({username}).first();
            if (user && bcryptjs.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(201).json({token});
            } else {
                res.status(400).json({message:"invalid credentials"});
            }
        } catch (error) {
            res.status(500).json({message:"something went wrong"})
        }
    } else {
        res.status(400).json({message:"please provide username and password"})
    }
})

module.exports = route;