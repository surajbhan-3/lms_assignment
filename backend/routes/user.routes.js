const Router = require("express")

const userRouter = Router();


userRouter.post("/register_user", registerUser );
userRouter.post("/login", userLogin )