const {CourseModel} = require("../models/courses.model");



// Get all the courses
const getAllCourses = async(req,res)=>{

    try {
        const getCourses = await CourseModel.findAll()
        res.status(200).send({data:getCourses,result:true})
    } catch (error) {
        return res.status(500).send({message:"Internal Server Error", Error:error.message})
    }

}

// Get course by id 
const getCourseById = async(req,res)=>{
   const {id}=req.params;
    try {
        const getSingleCourse = await CourseModel.findByPk(id);
        res.status(200).send({data:getSingleCourse,result:true})
    } catch (error) {
        return res.status(500).send({message:"Internal Server Error", Error:error.message})
    }

}
// Create new course
const createCourse = async(req,res)=>{
const {title, description, levels} = req.body;
console.log(req.body.title)
    try {
        const course = await CourseModel.create({ title, description, levels });
        res.status(200).send({message:"course created successfully",data:course,result:true})
    } catch (error) {
        return res.status(500).send({message:"Internal Server Error", Error:error.message})
    }

}

// Update a course by ID
const updateCourse = async (req, res) => {
    const { id } = req.params;
    const { title, description, levels } = req.body;
    try {
        const course = await CourseModel.findByPk(id);
        if (!course) {
            return res.status(404).send({ message: "Course not found", result: false });
        }
        course.title = title || course.title;
        course.description = description || course.description;
        course.levels = levels || course.levels;
        await course.save();
        res.status(200).send({ message: "Course updated successfully", data: course, result: true });
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", error: error.message });
    }
};

// Delete a course by ID
const deleteCourse = async (req, res) => {
    const { id } = req.params;
    try {
        const course = await CourseModel.findByPk(id);
        if (!course) {
            return res.status(404).send({ message: "Course not found", result: false });
        }
        await course.destroy();
        res.status(200).send({ message: "Course deleted successfully", result: true });
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", error: error.message });
    }
};




module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,

}