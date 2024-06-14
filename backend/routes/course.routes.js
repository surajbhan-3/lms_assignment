const Router = require("express");
const { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse } = require("../controllers/course.controllers");
const { authorize } = require("../middleware/Auth");

const courseRouter = Router();


courseRouter.get("/get_all_courses",authorize, getAllCourses );
courseRouter.get("/get_coursesbyid/:id",authorize, getCourseById )
courseRouter.post("/create_course",authorize, createCourse)
courseRouter.patch("/update_course/:id",authorize, updateCourse)
courseRouter.delete("/delete_course",authorize, deleteCourse)


module.exports = courseRouter;