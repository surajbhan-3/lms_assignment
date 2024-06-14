const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const UserCourse = sequelize.define('UserCourse', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users', // refers to table name 'User'
            key: 'id'
        }
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Courses', // refers to table name 'Course'
            key: 'id'
        }
    }
});

module.exports = {UserCourse};
