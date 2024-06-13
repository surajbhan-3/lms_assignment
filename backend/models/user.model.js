const {Sequelize, DataTypes} =  require("sequelize");


const sequelize = new Sequelize('mysql2');


const UserModel = new sequelize.define("User", {
    username:  {type: DataTypes.STRING,    allowNull: false, unique: true},
    email:     {type: DataTypes.STRING,    allowNull: false, unique: true},
    password:  {type: DataTypes.STRING,    allowNull: false  },
    role:      {type: DataTypes.ENUM('student', 'teacher'),   allowNull: false  }
})

module.exports = {UserModel}