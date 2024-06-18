const express = require("express");
const router = express.Router();
const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });

    if (userExist) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ ...req.body, password: hashedPassword });
    // const newUser = new User(req.body);
    await newUser.save();
    res
      .status(200)
      .send({ message: "User created sucessfully", success: true });
  } catch (e) {
    console.log(e)
    res.status(500).send({ message: "Error creating user", sucess: false });
  }
});


router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(200)
        .send({ message: "User does not exist", success: false });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Incorrect password", success: false });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d", 
      });
      res
      .status(200)
      .send({ message: "Login successful", success: true, data: token });
    }
   } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Error logging in", success: false ,e});
  }
});


router.post('get-user-by-id',async(token)=>{
  try {
    
  } catch (error) {
    
  }
})
module.exports = router;
