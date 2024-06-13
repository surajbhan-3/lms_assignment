const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("lms", 'root', 'password',{
    dialect:"mysql",
    host:"localhost"
})


module.exports = {sequelize}