const mongoose = require("mongoose");
const express = require("express");
const userSchema = mongoose.Schema({
  id: {
    type: Number,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
});
module.exports = { userSchema };
