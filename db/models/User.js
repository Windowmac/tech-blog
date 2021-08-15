const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connection.js');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{ sequelize, modelName: 'user', freezeTableName: true, timestamps: false}
);

User.beforeCreate(async (user, options) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
  });

module.exports = User;