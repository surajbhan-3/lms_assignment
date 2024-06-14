const {sequelize} = require("../config/db.js")
const {DataTypes}= require("sequelize")
const {UserModel} = require("../models/user.model.js")
const {CourseModel}= require("../models/courses.model.js")
const {UserCourse} = require("../models/usercourse.model.js")


const ProgresModel = sequelize.define("Progress", {
    userId: {type: DataTypes.INTEGER,references: { model: 'Users',key: 'id'},allowNull: false},
    courseId: { type: DataTypes.INTEGER,references: {model: "Courses",key: 'id'}, allowNull: false},
    currentLevel: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    progress: {type: DataTypes.FLOAT, allowNull: false, defaultValue: 0.0 }
});


UserCourse.belongsTo(UserModel, { foreignKey: 'userId' });
UserCourse.belongsTo(CourseModel, { foreignKey: 'courseId' });
UserCourse.hasMany(ProgresModel, { foreignKey: 'userCourseId' });
UserModel.hasMany(ProgresModel, { foreignKey: 'userId' });
CourseModel.hasMany(ProgresModel, { foreignKey: 'courseId' });
ProgresModel.belongsTo(UserModel, { foreignKey: 'userId' });
ProgresModel.belongsTo(CourseModel, { foreignKey: 'courseId' });

UserModel.belongsToMany(CourseModel, { through: UserCourse });
CourseModel.belongsToMany(UserModel, { through: UserCourse });
UserCourse.belongsTo(UserModel, { foreignKey: 'userId' });
UserCourse.belongsTo(CourseModel, { foreignKey: 'courseId' });
UserCourse.hasMany(ProgresModel, { foreignKey: 'userCourseId' });


sequelize.sync()
    .then(() => {
    console.log("Database & tables created!");
})
.catch(error => {
    console.error("Error creating database tables:", error);
});


module.exports = {ProgresModel}

