
const Router = require("express");
const { joinCourse, getProgress, updateProgress } = require("../controllers/progress.controllers");
const { AuthenticationMiddleware } = require("../middleware/Auth");

const progressRouter = Router();


// progressRouter.get("/get_all_courses", getAllCourses );
progressRouter.get("/get_progress/:courseId", AuthenticationMiddleware, getProgress )
progressRouter.post("/join_course/:courseId", AuthenticationMiddleware, joinCourse)
progressRouter.patch("/update_progress/:courseId",AuthenticationMiddleware, updateProgress)


module.exports =progressRouter;
