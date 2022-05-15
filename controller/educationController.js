const Education = require("../models/Education");

exports.createEducation = async (req, res) => {
  try {
    const { degree, institution, to, from } = req.body;
    // console.log(req.body)
    const education = await Education.findOne({ degree });

    if (education)
      return res.status(400).json({
        status: "fail",
        message: "Degree already exits",
      });

    await Education.create({
      degree,
      institution,
      to,
      from,
    });

    res.status(200).json({
      status: "success",
      message: "Educaction created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: "server error",
    });
  }
};

exports.getEducation = async (req, res) => {
  try {
    const education = await Education.find();

    if (!education)
      return res.status(500).json({
        status: "fail",
        message: "No education found",
      });

    res.status(200).json({
      status: "success",
      data: {
        education,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "server error ",
    });
  }
};

exports.deleteEducation = async (req, res) => {
  try {
    const { id } = req.body;

    const education = await Education.findByIdAndDelete(id);

    if (!education)
      return res.status(200).json({
        status: "fail",
        message: "no educaiton found",
      });

    res.status(200).json({
      status: "fail",
      message: "education deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "server error",
    });
  }
};
