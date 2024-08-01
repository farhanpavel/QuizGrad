const mongoose = require("mongoose");
const { questionSchema } = require("../models/questionSchema");
const { courseSchema } = require("../models/courseSchema");
const Question = mongoose.model("question", questionSchema);
const Course = mongoose.model("course", courseSchema);
const questionGet = async (req, res) => {
  try {
    const question = await Question.find({
      course_id: req.params.code,
      teacher_name: req.params.name,
    });
    res.status(200).json(question);
  } catch (err) {
    res.status(500).json("Error on Get Request");
  }
};
const questionGetById = async (req, res) => {
  try {
    const question = await Question.findOne({
      question_id: req.params.questionId,
    });
    res.status(200).json(question);
  } catch (err) {
    res.status(500).json("Error on Get Request");
  }
};
const questionGetMixer = async (req, res) => {
  try {
    const quizzes = await Question.find({
      course_id: req.params.code,
      teacher_name: req.params.name,
    });

    const courseInfo = await Course.findOne(
      { course_code: req.params.code, teacher_name: req.params.name },
      { time: 1, course_name: 1 }
    );

    const data = quizzes.map((quiz) => ({
      question_id: quiz.question_id,
      question: quiz.question,
      optionOne: quiz.optionOne,
      optionTwo: quiz.optionTwo,
      optionThree: quiz.optionThree,
      optionFour: quiz.optionFour,
      time: courseInfo.time,
      course_name: courseInfo.course_name,
    }));

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json("Error on Get Request");
  }
};

const questionPost = async (req, res) => {
  try {
    const question = await Question.create(req.body);
    res.status(200).json(question);
  } catch (err) {
    res.status(500).json("Error on Post Request");
  }
};
const questionDelete = async (req, res) => {
  try {
    const question = await Question.deleteOne({
      question_id: req.params.id,
    });
    res.status(200).json(question);
  } catch (err) {
    res.status(500).json("Error on Delete Request");
  }
};
const questionPut = async (req, res) => {
  try {
    const question = await Question.updateOne(
      { question_id: req.params.questionId },
      {
        $set: {
          question: req.body.question,
          optionOne: req.body.optionOne,
          optionTwo: req.body.optionTwo,
          optionThree: req.body.optionThree,
          optionFour: req.body.optionFour,
          ans: req.body.ans,
        },
      }
    );
    res.status(200).json(question);
  } catch (err) {
    res.status(500).json("Error on Post Request");
  }
};
module.exports = {
  questionGet,
  questionDelete,
  questionPost,
  questionGetById,
  questionPut,
  questionGetMixer,
};
