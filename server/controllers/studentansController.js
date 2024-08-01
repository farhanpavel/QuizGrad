const mongoose = require("mongoose");
const { studentansSchema } = require("../models/studentansSchema");
const { questionSchema } = require("../models/questionSchema");
const Studentans = mongoose.model("studentans", studentansSchema);

const Question = mongoose.model("question", questionSchema);
const studentansGet = async (req, res) => {
  try {
    const studentAns = await Studentans.find();
    res.status(200).json(studentAns);
  } catch (err) {
    res.status(500).json("error on get request");
  }
};
const studentansPost = async (req, res) => {
  try {
    const studentAns = await Studentans.insertMany(req.body);
    res.status(200).json(studentAns);
  } catch (err) {
    console.error("Error creating student answers:", err);
    res.status(500).json("error on post request");
  }
};
const getQuizResults = async (req, res) => {
  const { teacher_name } = req.query;
  try {
    const studentAnswers = await Studentans.find({ teacher_name });
    const questionIds = studentAnswers.map((ans) => ans.question_id);
    const questions = await Question.find({
      question_id: { $in: questionIds },
    });

    const resultsMap = {};
    studentAnswers.forEach((studentAns) => {
      const question = questions.find(
        (q) => q.question_id === studentAns.question_id
      );
      const marks = studentAns.student_ans === question.ans ? 1 : 0;
      const key = `${studentAns.student_name}-${studentAns.course_code}`;
      if (!resultsMap[key]) {
        resultsMap[key] = {
          student_name: studentAns.student_name,
          course_code: studentAns.course_code,
          student_email: studentAns.student_email,
          marks: 0,
        };
      }
      resultsMap[key].marks += marks;
    });

    const results = Object.values(resultsMap);

    res.status(200).json({ results });
  } catch (err) {
    console.error("Error fetching quiz results:", err);
    res.status(500).json("Error on get quiz results request");
  }
};

module.exports = {
  studentansGet,
  studentansPost,
  getQuizResults,
};
