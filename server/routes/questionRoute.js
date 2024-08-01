const express = require("express");
const {
  questionDelete,
  questionPost,
  questionGet,
  questionGetById,
  questionPut,
  questionGetMixer,
} = require("../controllers/questionController");
const questionRouter = express.Router();
questionRouter.get("/course/:code/:name", questionGet);
questionRouter.get("/quiz/:questionId", questionGetById);
questionRouter.get("/data/:code/:name", questionGetMixer);
questionRouter.post("/", questionPost);
questionRouter.delete("/:id", questionDelete);
questionRouter.put("/:questionId", questionPut);

module.exports = questionRouter;
