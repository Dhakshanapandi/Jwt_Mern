const User = require("../models/userSchema.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const Login = async (req, res) => {
    try {
      var checkuser = await User.findOne({ email: req.body.email });
      if (!checkuser) return res.status(404).json("Email Not Found");
  
      var validps = await bcrypt.compare(req.body.password, checkuser.password);
  
      if (!validps) return res.status(404).json("Wrong Password");
  
      var userToken = jwt.sign({ email: checkuser.email }, "djkfhfjhhmksdchl");
      res.header("auth", userToken).send(userToken);
    } catch (err) {
      return res.status(404).json(err);
    }
  }

module.exports = Login;