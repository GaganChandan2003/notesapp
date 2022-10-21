const express = require('express');
const UserModel = require("../models/User.modal");
const bcrypt = require('bcrypt');
const userController = express.Router();
require("dotenv").config();
let jwt = require('jsonwebtoken');



userController.post("/register", (req, res) => {
    const {username, email, password } = req.body;
    bcrypt.hash(password, 6, async (err, hash) => {
        if (err) {
            return res.send("Please try again");
        }
        const user = new UserModel({
            username,
            email,
            password: hash
        })
        await user.save();
    })
    res.send("Sign Up Sucessfull");
})



userController.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log(email,password);
    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.send("Invalid Credentials")
    }
    const hash = user.password;
    const userId = user._id
    bcrypt.compare(password, hash, function (err, result) {
        if (result) {
            var token = jwt.sign({ email, userId }, process.env.SECRET);
            res.send({ messege: "Login Sucessfull", token: token })
        }
        else {
            return res.send("Invalid Credentials");
        }
    });
})

module.exports = userController;