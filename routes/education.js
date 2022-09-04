const express = require("express");
const educationRouter = express.Router();
const protect = require("../middleware/auth");
const educationControllers = require("../controllers/EducationController")

authRouter
  .route("/")
  .get(protect, educationControllers.getEducation)
  .post(protect, educationControllers.createEducation)
  .put(protect, educationControllers.updateEducation)
authRouter.route('/:id').delete(protect, educationControllers.deleteEducation)

module.exports = educationRouter;
