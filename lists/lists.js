const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');

const db = require('../data/knexConfig');

const secret = process.env.SECRET || "there are no secrets here"


function restricted(req, res, next) {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err) {
                res.status(401).json(err)
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        });
    }
}

route.get('/', restricted, async (req, res) => {
    try {
        const lists = await db('lists');
        res.status(200).json({lists:lists, userId:req.decodedJwt.userId});
    } catch (error) {
        res.status(500).json({error});
    }

});

route.post('/', restricted, async (req, res) => {
    const list = req.body
    list.userId = req.decodedJwt.userId
    if (list.title && list.description && list.userId) {
        try {
            const [id] = await db('lists').insert(list);
            const list = await db('lists').where({id}).first();
            res.status(400).json(list);
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(400).json({message:"please provide title and description"})
    }
})

module.exports = route;