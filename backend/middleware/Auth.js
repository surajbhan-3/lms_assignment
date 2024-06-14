const jwt = require("jsonwebtoken");
require("dotenv").config()

const AuthenticationMiddleware =  async(req,res, next)=>{
  console.log("hello")
    const token =  req.headers.authorization.split(" ")[1];
    try {
        const decodeToken = jwt.verify(token,process.env.SECRET);
        req.body.userId = decodeToken.userId;
        console.log(req.body.userId)
        next();
    } catch (error) {
        return res.status(401).send({message:"Authentication failed", Error:error.message, result:false})
    }
}


const authorize = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send({ message: "No token provided", result: false });
  }

  const token = authHeader.split(" ")[1];

  try {
      const decodedToken = jwt.verify(token, process.env.SECRET);
      req.body.userId = decodedToken.userId;

      if (decodedToken.role !== "teacher") {
    
          return res.status(403).send({ message: "Access denied. You do not have the required role.", result: false });
      }

      next();
  } catch (error) {
      return res.status(401).send({ message: "Authentication failed", error: error.message, result: false });
  }
};


module.exports = {AuthenticationMiddleware, authorize}