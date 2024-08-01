const mongoose = require("mongoose");
const { studentSchema } = require("../models/studentSchema");
const Student = mongoose.model("student", studentSchema);
const studentGet = async (req, res) => {
  try {
    const query = req.query.email
      ? { email: new RegExp(req.query.email, "i") }
      : {};
    const studentData = await Student.find(query);
    res.status(200).json(studentData);
  } catch (err) {
    res.status(500).json("Error on student get request");
  }
};

const studentPost = async (req, res) => {
  try {
    const studentData = await Student.create(req.body);
    res.status(200).json(studentData);
  } catch (err) {
    res.status(500).json("Error on student post request");
  }
};
const studentDelete = async (req, res) => {
  try {
    const studentData = await Student.deleteOne({ student_id: req.params.id });
    res.status(200).json(studentData);
  } catch (err) {
    res.status(500).json("Error on student delete request");
  }
};

module.exports = {
  studentGet,
  studentPost,
  studentDelete,
};
