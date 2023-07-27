const Router = require("express").Router();

const  Register  = require("./controllers/register.js");
const  Login  = require("./controllers/login.js");
const  verifyToken = require("./utils/verifyToken.js");
const  getUsers  = require("./controllers/getUsers.js");

Router.post("/register",Register) 

Router.post("/login", Login);

Router.get("/getall", verifyToken , getUsers);

module.exports = Router;
