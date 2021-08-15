const express = require('express');
const app = express();
const router = require('./routes');
const sequelize = require('./db/connection.js');

const PORT = 3131;

app.use(express.json());
app.use(express.urlencoded( { extended: true }));

app.use(router);

sequelize.sync().then(app.listen(PORT, () => {
    console.log('listening on: ', PORT);
}));