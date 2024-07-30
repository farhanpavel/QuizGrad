const mongoose = require("mongoose");
const express = require("express");
const courseSchema = mongoose.Schema({
  teacher_name: {
    type: String,
    required: true,
  },
  course_name: {
    type: String,
    required: true,
  },

  course_code: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
});
module.exports = { courseSchema };
