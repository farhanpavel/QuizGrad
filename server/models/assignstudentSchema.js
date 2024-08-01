const mongoose = require("mongoose");
const express = require("express");
const assignstudentSchema = mongoose.Schema({
  teacher_name: {
    type: String,
    required: true,
  },
  course_code: {
    type: String,
    required: true,
  },
  student_email: {
    type: String,
    required: true,
  },
  active: {
    type: Number,
    required: true,
  },
});
module.exports = { assignstudentSchema };
