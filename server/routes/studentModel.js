const express = require("express");
const {
  studentGet,
  studentPost,
  studentDelete,
} = require("../controllers/studentController");

const studentRouter = express.Router();
studentRouter.get("/", studentGet);

studentRouter.post("/", studentPost);
studentRouter.delete("/:id", studentDelete);

module.exports = studentRouter;
