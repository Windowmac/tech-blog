const express = require('express');
const router = express.Router();
const User = require('../../db/models/User.js');
//end path: /api/users

router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users);
});

router.post('/', async (req, res) => {
    const newUser = await User.create(req.body).catch(err => {res.status(500).json('unable to create user')});
    res.status(201).json(newUser);
});

module.exports = router;