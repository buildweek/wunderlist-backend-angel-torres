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
};

route.get('/', restricted, async (req, res) => {
    // If logged in. Returns list of all lists
    try {
        const lists = await db('lists');
        res.status(200).json(lists);
    } catch (error) {
        res.status(500).json({error});
    }

});

route.get('/:id', restricted, async (req, res) => {
    // If logged in, returns list of all lists from specified
    try {
        const lists = await db('lists').where({userId:req.params.id})
        res.status(200).json(lists)
    } catch (error) {
        res.status(500).json(error)
    }
})

route.post('/', restricted, async (req, res) => {
    // posts a new list to database
    const list = req.body
    list.userId = req.decodedJwt.userId;
    list.completed = false;
    if (list.title && list.description) {
        try {
            const [id] = await db('lists').insert(list);
            res.status(201).json({id});
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(400).json({message:"please provide title, description, and due date"})
    }
});

// function authorized(req, res, next) {
//     const list = req.body;
//     list.userId = req.decodedJwt.userId;
//     try {
//         const toUpdate = await db('lists').where({id:list.userId})
//     } catch (error) {
        
//     }
  
// };

route.put('/:id', restricted, async (req, res) => {
    const list = req.body;
    list.completed = false;
    list.userId = req.decodedJwt.userId;
    const toUpdate = await db('lists').where({id:req.params.id}).first();
    if (toUpdate.userId === list.userId) {
        if (list.title && list.description && list.dueDate) {
            try {
                const updated = await db('lists').where({id:req.params.id}).update(list);
                res.status(200).json(updated);
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(400).json({message:"please provide list title, description, due date"})
        }
    } else {
        res.status(400).json({message:"you are not authorized"})
    }
})

module.exports = route;