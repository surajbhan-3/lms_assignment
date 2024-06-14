const { ProgresModel } = require('../models/progress.model.js');
const { CourseModel } = require('../models/courses.model.js');
const { UserCourse } = require('../models/usercourse.model.js');
const {UserModel} = require("../models/user.model.js")





const joinCourse = async (req, res) => {
    const { userId} = req.body;
    const {courseId} = req.params
    console.log(courseId)

    try {
        // Check if user and course exist
        const user = await UserModel.findByPk(userId);
        const course = await CourseModel.findByPk(courseId);

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        if (!course) {
            return res.status(404).send({ message: 'Course not found' });
        }

        // Create record in UserCourse table
        const progress = await ProgresModel.create({userId, courseId,})
        const userCourse = await UserCourse.create({ userId, courseId });

        res.status(201).send({ message: 'User joined course successfully', data: userCourse });
    } catch (error) {
        res.status(500).send({ message: 'Failed to join course', error: error.message });
    }
};


const getProgress = async (req, res) => {
    const { courseId } = req.params;
    const userId = req.body.userId;

    try {
        const progress = await ProgresModel.findOne({ where: { courseId, userId } });

        if (!progress) {
            return res.status(404).send({ message: "Progress not found", result: false });
        }

        res.status(200).send({ data: progress, result: true });
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", error: error.message });
    }
};

const updateProgress = async (req, res) => {
    const { courseId } = req.params;
    const userId = req.body.userId;
    const { currentLevel, progress } = req.body;

    try {
        let progressRecord = await ProgresModel.findOne({ where: { courseId, userId } });

        if (!progressRecord) {
            progressRecord = await ProgresModel.create({ courseId, userId, currentLevel, progress });
        } else {
            progressRecord.currentLevel = currentLevel || progressRecord.currentLevel;
            progressRecord.progress = progress || progressRecord.progress;
            await progressRecord.save();
        }

        res.status(200).send({ message: "Progress updated successfully", data: progressRecord, result: true });
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", error: error.message });
    }
};

module.exports = { getProgress, updateProgress,joinCourse };
