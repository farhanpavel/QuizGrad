const express = require("express");
const {
  questionDelete,
  questionPost,
  questionGet,
} = require("../controllers/questionController");
const questionRouter = express.Router();
questionRouter.get("/:code", questionGet);

questionRouter.post("/", questionPost);
questionRouter.delete("/:id", questionDelete);

module.exports = questionRouter;
