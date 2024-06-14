const {sequelize} = require("../config/db.js")
const {DataTypes}= require("sequelize")


const CourseModel =  sequelize.define("Course", {
    title:  {type: DataTypes.STRING,    allowNull: false},
    description:{type: DataTypes.TEXT,    allowNull: false},
    levels: { type: DataTypes.JSON, allowNull: false,
        defaultValue: [] // Initialize as an empty array
    }
    
})

sequelize.sync()
  .then(() => {
    console.log("Database & tables created!");
})
.catch(error => {
    console.error("Error creating database tables:", error);
});

module.exports = {CourseModel}

