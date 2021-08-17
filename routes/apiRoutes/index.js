const express = require('express');
const router = express.Router();
const userRoutes = require('./users.js');
const postRoutes = require('./posts.js');

router.use('/posts', postRoutes);
router.use('/users', userRoutes);

module.exports = router;