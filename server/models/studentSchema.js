const mongoose = require("mongoose");
const express = require("express");
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
module.exports = { studentSchema };
