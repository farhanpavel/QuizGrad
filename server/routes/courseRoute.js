const express = require("express");
const {
  courseDelete,
  courseGet,
  coursePost,
} = require("../controllers/courseController");
const courseRouter = express.Router();
courseRouter.get("/:name", courseGet);

courseRouter.post("/", coursePost);
courseRouter.delete("/:code/:name", courseDelete);

module.exports = courseRouter;
