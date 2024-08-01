const express = require("express");
const {
  assignstudentGet,
  assignstudentPost,
  assignstudentDelete,
  assignstudentGetByemail,
  assignstudentPut,
} = require("../controllers/assignstudentController");
const assignstudentRouter = express.Router();
assignstudentRouter.get("/:code/:name", assignstudentGet);
assignstudentRouter.get("/:email", assignstudentGetByemail);
assignstudentRouter.put("/:name/:id/:email", assignstudentPut);
assignstudentRouter.post("/", assignstudentPost);
assignstudentRouter.delete("/:email/:code", assignstudentDelete);
module.exports = assignstudentRouter;
