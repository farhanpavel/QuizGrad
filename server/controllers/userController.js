const mongoose = require("mongoose");
const { userSchema } = require("../models/userSchema");
const { studentSchema } = require("../models/studentSchema");
const { teacherSchema } = require("../models/teacherSchema");
const User = mongoose.model("user", userSchema);
const Student = mongoose.model("student", studentSchema);
const Teacher = mongoose.model("teacher", teacherSchema);

const userGet = async (req, res) => {
  try {
    const userData = await User.findOne({ email: req.params.email });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json("Error on user get request");
  }
};

const userPost = async (req, res) => {
  try {
    const userData = await User.create(req.body);

    if (req.body.id === 3) {
      const studentDivData = {
        name: req.body.name,
        email: req.body.email,
      };
      const studentData = await Student.create(studentDivData);
      const combinedData = {
        userData,
        studentData,
      };
      res.status(200).json(combinedData);
    } else if (req.body.id === 2) {
      const teacherDivData = {
        name: req.body.name,
        email: req.body.email,
      };
      const teacherData = await Teacher.create(teacherDivData);
      const combinedData = {
        userData,
        teacherData,
      };
      res.status(200).json(combinedData);
    } else {
      res.status(200).json(userData);
    }
  } catch (err) {
    res.status(500).json("Error on user post request");
  }
};
const userPut = async (req, res) => {
  try {
    const userData = await User.updateOne(
      { email: req.params.email },
      { $set: req.body }
    );
    if (req.body.id == 3) {
      const studentDivData = {
        email: req.body.email,
        name: req.body.name,
      };
      const studentData = await Student.updateOne(
        { email: req.params.email },
        { $set: studentDivData }
      );
      const combinedData = {
        userData,
        studentData,
      };

      res.status(200).json(combinedData);
    } else if (req.body.id == 2) {
      const teacherDivData = {
        email: req.body.email,
        name: req.body.name,
      };
      const Teacherdata = await Teacher.updateOne(
        { email: req.params.email },
        { $set: teacherDivData }
      );
      const combinedData = {
        userData,
        Teacherdata,
      };

      res.status(200).json(combinedData);
    }
  } catch (err) {
    res.status(500).json("Error on user post request");
  }
};
const userDelete = async (req, res) => {
  try {
    const userData = await User.deleteOne({
      email: req.params.email,
    });
    const Data = await Student.deleteOne({ email: req.params.email });
    if (Data.deletedCount == 0) {
      const Data = await Teacher.deleteOne({ email: req.params.email });
    }
    const combinedData = {
      Data,
      userData,
    };

    res.status(200).json(combinedData);
  } catch (err) {
    res.status(500).json("Error on user Delete request");
  }
};

module.exports = {
  userGet,
  userPost,
  userPut,
  userDelete,
};
