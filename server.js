const express = require('express');
const app = express();
const router = require('./routes');

const PORT = 3131;

app.use(express.json());
app.use(express.urlencoded( { extended: true }));

app.use(router);

app.listen(PORT, () => {
    console.log('listening on: ', PORT);
});