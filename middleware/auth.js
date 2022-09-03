const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const jwt = require('jsonwebtoken')
const Auth = require("../models/authModel")

const protect = catchAsync( async(req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[0]
    }

    if(!token) return next(new AppError('No token found, Not Authorized', 400))
    const decode = jwt.verify(token, process.env.JWT_SECERET)
    const user = await Auth.findById({ _id: decode.id})
    console.log(user)
    req.user = user
    console.log(header)
})

module.exports = protect