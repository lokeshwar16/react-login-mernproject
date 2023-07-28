const mongoose = require("mongoose");

const resgisterSchema = new mongoose.Schema({
    email: String,
    password: String
})

const RegisterModel = mongoose.model("emps",resgisterSchema)
module.exports = RegisterModel