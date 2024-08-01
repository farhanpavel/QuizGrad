const mongoose = require("mongoose");
const { assignstudentSchema } = require("../models/assignstudentSchema");
const Assignstudent = mongoose.model("assignstudent", assignstudentSchema);
const assignstudentGet = async (req, res) => {
  try {
    const assignstudent = await Assignstudent.find({
      course_code: req.params.code,
      teacher_name: req.params.name,
    });
    res.status(200).json(assignstudent);
  } catch (err) {
    res.status(500).json("Error on Get Request");
  }
};
const assignstudentGetByemail = async (req, res) => {
  try {
    const assignstudent = await Assignstudent.find({
      student_email: req.params.email,
    });
    res.status(200).json(assignstudent);
  } catch (err) {
    res.status(500).json("Error on Get Request");
  }
};
const assignstudentDelete = async (req, res) => {
  try {
    const assignstudent = await Assignstudent.deleteOne({
      student_email: req.params.email,
      course_code: req.params.code,
    });
    if (assignstudent.deletedCount === 0) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(assignstudent);
  } catch (err) {
    res.status(500).json("Error on Delete Request");
  }
};

const assignstudentPost = async (req, res) => {
  try {
    const assignstudent = await Assignstudent.create(req.body);
    res.status(200).json(assignstudent);
  } catch (err) {
    res.status(500).json("Error on Post Request");
  }
};
const assignstudentPut = async (req, res) => {
  try {
    const assignstudent = await Assignstudent.updateOne(
      {
        teacher_name: req.params.name,
        course_code: req.params.id,
        student_email: req.params.email,
      },
      { $set: { active: 1 } }
    );
    res.status(200).json(assignstudent);
  } catch (err) {
    res.status(500).json("Error on Post Request");
  }
};
module.exports = {
  assignstudentPost,
  assignstudentGet,
  assignstudentDelete,
  assignstudentGetByemail,
  assignstudentPut,
};
