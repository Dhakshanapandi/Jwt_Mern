const User = require("../models/userSchema.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");




const Register = async (req, res) => {console.log(req.body);
    try {
      var emailexist = await User.findOne({ email: req.body.email });
      if (emailexist) {
        return res.status(400).json("Email Already Exists");
      }
      const hash = await bcrypt.hash(req.body.password, 10);
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
      });
      const data = await user.save();
      res.status(200).json(data);
    } catch (err) {
      return res.status(404).json(err);
    }
  };


module.exports = Register;