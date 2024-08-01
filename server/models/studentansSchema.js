const mongoose = require("mongoose");
const express = require("express");
const studentansSchema = mongoose.Schema({
  teacher_name: {
    type: String,
    required: true,
  },
  question_id: {
    type: String,
    required: true,
  },
  course_code: {
    type: String,
    required: true,
  },
  student_ans: {
    type: String,
    required: false,
  },
  student_name: {
    type: String,
    required: true,
  },
  student_email: {
    type: String,
    required: true,
  },
});
module.exports = { studentansSchema };
