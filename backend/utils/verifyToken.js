const jwt = require("jsonwebtoken"); 
 const verifyToken = (req, res, next) => {
    var token = req.header("auth");
    console.log(token)
    if(token){
      jwt.verify(token, "djkfhfjhhmksdchl", async (err, data) => {
          if (err) {
            return res.send("Token Not Valid");
          } else {
            next();
          }
        });
    }
    else{
      return res.send("Token Not Found")
    }
    
  };

module.exports = verifyToken;