const mongoose = require("mongoose");
const { teacherSchema } = require("../models/teacherSchema");
const Teacher = mongoose.model("teacher", teacherSchema);
const teacherGet = async (req, res) => {
  try {
    const teacherData = await Teacher.find();
    res.status(200).json(teacherData);
  } catch (err) {
    res.status(500).json("Error on teacher get request");
  }
};
const teacherPost = async (req, res) => {
  try {
    const teacherData = await Teacher.create(req.body);
    res.status(200).json(teacherData);
  } catch (err) {
    res.status(500).json("Error on teacher post request");
  }
};
const teacherDelete = async (req, res) => {
  try {
    const teacherData = await Teacher.deleteOne({ teacher_id: req.params.id });
    res.status(200).json(teacherData);
  } catch (err) {
    res.status(500).json("Error on teacher delete request");
  }
};

module.exports = {
  teacherGet,
  teacherPost,
  teacherDelete,
};
