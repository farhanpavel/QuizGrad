const express = require("express");
const {
  userGet,
  userPost,
  userPut,
  userDelete,
} = require("../controllers/userController");

const userRouter = express.Router();
userRouter.get("/:email", userGet);
userRouter.post("/", userPost);
userRouter.put("/:email", userPut);
userRouter.delete("/:email", userDelete);

module.exports = userRouter;
