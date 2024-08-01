const express = require("express");
const {
  studentansGet,
  studentansPost,
  getQuizResults,
} = require("../controllers/studentansController");
const studentansRouter = express.Router();
studentansRouter.get("/", studentansGet);
studentansRouter.post("/", studentansPost);
studentansRouter.get("/results", getQuizResults);
module.exports = {
  studentansRouter,
};
