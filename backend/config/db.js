const {Sequelize} = require("sequelize");
require("dotenv").config()
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER,process.env.DB_PASSWORD,{
    dialect:"mysql",
    host:process.env.DB_HOST,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000, // Maximum time (in ms) that pool will try to get connection before throwing error
        idle: 10000, // Maximum time (in ms) that a connection can be idle before being released
    },
})


module.exports = {sequelize}