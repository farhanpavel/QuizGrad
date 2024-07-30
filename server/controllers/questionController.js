const mongoose = require("mongoose");
const { questionSchema } = require("../models/questionSchema");
const Question = mongoose.model("question", questionSchema);
const questionGet = async (req, res) => {
  try {
    const question = await Question.find({ course_id: req.params.code });
    res.status(200).json(question);
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
module.exports = {
  questionGet,
  questionDelete,
  questionPost,
};
