const Router = require("express");
const { registerUser, userLogin } = require("../controllers/user.controllers");

const userRouter = Router();


userRouter.post("/register_user", registerUser );
userRouter.post("/login", userLogin )


module.exports = userRouter;