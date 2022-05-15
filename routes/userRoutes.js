const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/userController");
const skillsController = require('../controller/skillsController')
const educationController = require('../controller/educationController')

userRouter.route("/signup").post(userController.signUp);
userRouter.route("/login").post(userController.login);
userRouter.route("/skills").post(skillsController.skills).get(skillsController.getSkills).delete(skillsController.deleteSkills);
userRouter.route("/education").post(educationController.createEducation).get(educationController.getEducation).delete(educationController.deleteEducation)
// .get(skillsController.getSkills).delete(skillsController.deleteSkills);

module.exports = userRouter;
