const mongoose = require("mongoose");
const { courseSchema } = require("../models/courseSchema");
const { questionSchema } = require("../models/questionSchema");
const Course = mongoose.model("course", courseSchema);
const Question = mongoose.model("question", questionSchema);
const courseGet = async (req, res) => {
  try {
    const course = await Course.find({ teacher_name: req.params.name });
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json("Error on Get Request");
  }
};

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
    const combineData = {
      course,
      question,
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
