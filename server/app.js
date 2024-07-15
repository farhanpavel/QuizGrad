const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
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
