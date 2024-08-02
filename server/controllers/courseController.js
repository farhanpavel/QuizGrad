const mongoose = require("mongoose");
const { courseSchema } = require("../models/courseSchema");
const { questionSchema } = require("../models/questionSchema");
const { assignstudentSchema } = require("../models/assignstudentSchema");
const { studentansSchema } = require("../models/studentansSchema");
const Course = mongoose.model("course", courseSchema);
const Question = mongoose.model("question", questionSchema);
const Assignstudent = mongoose.model("assignstudent", assignstudentSchema);
const Studentans = mongoose.model("studentans", studentansSchema);
const courseGet = async (req, res) => {
  try {
    const course = await Course.find({ teacher_name: req.params.name });
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json("Error on Get Request");
  }
};
// const courseGetbystudent = async (req, res) => {
//   try {
//     const course = await Course.find({ teacher_name: req.params.name });
//     res.status(200).json(course);
//   } catch (err) {
//     res.status(500).json("Error on Get Request");
//   }
// };
const coursePost = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json("Error on Post Request");
  }
};
const courseDelete = async (req, res) => {
  try {
    const course = await Course.deleteOne({
      course_code: req.params.code,
      teacher_name: req.params.name,
    });
    const question = await Question.deleteMany({
      course_id: req.params.code,
      teacher_name: req.params.name,
    });
    const studentassign = await Assignstudent.deleteMany({
      course_code: req.params.code,
      teacher_name: req.params.name,
    });
    const studentans = await Studentans.deleteMany({
      course_code: req.params.code,
      teacher_name: req.params.name,
    });
    const combineData = {
      course,
      question,
      studentassign,
      studentans,
    };
    res.status(200).json(combineData);
  } catch (err) {
    res.status(500).json("Error on Delete Request");
  }
};
module.exports = {
  courseGet,
  courseDelete,
  coursePost,
};
