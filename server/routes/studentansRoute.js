const express = require("express");
const {
  studentansGet,
  studentansPost,
  getQuizResults,
  viewStudentAnswers,
} = require("../controllers/studentansController");
const studentansRouter = express.Router();
studentansRouter.get("/", studentansGet);
studentansRouter.post("/", studentansPost);
studentansRouter.get("/results", getQuizResults);
studentansRouter.get("/view/:email/:course_code", viewStudentAnswers);

module.exports = {
  studentansRouter,
};
