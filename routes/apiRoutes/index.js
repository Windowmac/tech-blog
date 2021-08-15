const express = require('express');
const router = express.Router();
const userRoutes = require('./users.js');

router.get('/', (req, res) => {
    res.json('got here!');
});

router.use('/users', userRoutes);

module.exports = router;