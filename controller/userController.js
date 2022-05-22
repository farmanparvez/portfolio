const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signUp = async (req, res) => {
  try {
    let { name, email, password, confirmPassword } = req.body;
    const user = await User.findOne({ email });
    if (user)
      return res
        .status(400)
        .json({ status: "fail", message: "User with this email already exit" });

    const newUser = await User.create({
      name,
      email,
      password,
      confirmPassword,
    });

    const payload = {
      id: {
        id: newUser.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES },
      (err, token) => {
        if (err) throw err;
        res.status(201).json({
          status: "success",
          message: 'Signup',
          token,
          data: {
            user: newUser,
          },
        });
      }
    );

    // console.log(token);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(400)
        .json({ status: fail, message: "User do not exits" });

    // const isMatch = await bcrypt.compare(password, user.password);
    const isMatch = await user.correctPassword(password, user.password);

    if (!isMatch)
      return res
        .status(400)
        .json({ status: "fail", message: "Invalid crendentials" });

    jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          status: "login successfull",
          token,
          // data: { user },
        })
      },
    );
    // res.status(200).json({ status: "status", data: { user } });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "fail", error });
  }
};
