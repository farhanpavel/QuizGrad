const mongoose = require("mongoose");
const express = require("express");
const questionSchema = mongoose.Schema({
  teacher_name: {
    type: String,
    required: true,
  },
  question_id: {
    type: String,
    required: true,
    unique: true,
  },
  course_id: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  optionOne: {
    type: String,
    required: true,
  },
  optionTwo: {
    type: String,
    required: true,
  },
  optionThree: {
    type: String,
    required: true,
  },
  optionFour: {
    type: String,
    required: true,
  },
  ans: {
    type: String,
    required: true,
  },
});
module.exports = { questionSchema };
