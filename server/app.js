const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const studentRouter = require("./routes/studentRoute");
const teacherRouter = require("./routes/teacherRoute");
const cors = require("cors");
const questionRouter = require("./routes/questionRoute");
const courseRouter = require("./routes/courseRoute");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const URL = process.env.DATABASE_URL;
const PORT = process.env.PORT;
mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
    console.log("Disconnected");
  });
app.listen(PORT, () => {
  console.log(`App is Listening On Port ${PORT}`);
});

app.use("/api/user", userRouter);
app.use("/api/student", studentRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/question", questionRouter);
app.use("/api/course", courseRouter);
