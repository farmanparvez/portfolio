const Skills = require("../models/Skills");

exports.skills = async (req, res) => {
  try {
    const { icon, title, description } = req.body;

    const skills = await Skills.findOne({ title });

    if (skills)
      return res.status(400).json({
        status: "fail",
        message: "Skill already exits",
      });

    const newSkills = await Skills.create({
      icon,
      title,
      description,
    });

    res.status(200).json({
      message: "Skill create successfully",
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getSkills = async (req, res) => {
  try {
    const skills = await Skills.find();
    if (!skills)
      return res.status(400).json({
        status: "fail",
        message: "no skills found",
      });
    res.status(200).json({
      status: "success",
      data: { skills },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "server error",
    });
  }
};

exports.deleteSkills = async (req, res) => {
  try {
    const { id } = req.body;
    const skills = await Skills.findByIdAndDelete(id);
    if (!skills)
      return res.status(400).json({
        status: "fail",
        message: "no skills found with this ID",
      });
    res.status(200).json({
      status: "success",
      message: "delete succesfully",
    });
  } catch (error) {
    res.status.json({
      status: "fail",
      message: "server error",
    });
  }
};
