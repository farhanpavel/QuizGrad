const express = require("express");
const {
  teacherGet,
  teacherDelete,
  teacherPost,
} = require("../controllers/teacherController");

const teacherRouter = express.Router();
teacherRouter.get("/", teacherGet);
teacherRouter.post("/:id", teacherPost);
teacherRouter.delete("/", teacherDelete);

module.exports = teacherRouter;
