const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json('got here!');
});

module.exports = router;