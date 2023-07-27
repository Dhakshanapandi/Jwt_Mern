const User = require("../models/userSchema.js");





const getUsers = async (req, res) => {
    const data = await User.find().select(['-password']);
  
    res.status(200).json(data);
  }

module.exports = getUsers;