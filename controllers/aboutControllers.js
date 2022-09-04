const catchAsync = require("../utils/catchAsync");
const About = require("../models/About");
const AppError = require("../utils/appError");

exports.getAbout = catchAsync(async (req, res, next) => {
    const about = await About.find();
  
    res.status(200).json({
      status: "Success",
      message: "successfully",
      about,
    });
  });

exports.createAbout = catchAsync(async (req, res, next) => {
  const { degree, institution, to, from } = req.body;
  const about = await About.findOne({ degree });

  if (about) return next(new AppError("Degree already exits", 400));

  await About.create({
    degree,
    institution,
    from,
    to,
  });

  res.status(200).json({
    status: "success",
    message: "About created successfully",
    About,
  });
});

exports.updateAbout  = catchAsync(async (req, res, next) => {
    const { degree, institution, to, from, id } = req.body;
    const data = { degree, institution, to, from  };
    const About = await About.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  
    if (!About) return next(new AppError("No About found with that ID", 404));
  
    res.status(200).json({
      status: "success",
      message: "About is Updated successfully",
    });
  });
  
  exports.deleteAbout  = catchAsync(async (req, res, next) => {
    const About = await About.findByIdAndDelete(req.params.id);
  
    if (!About) return next(new AppError("No About found to delete ID", 404));
  
    res.status(200).json({
      status: "success",
      message: "About is delete successfully",
    });
  });
