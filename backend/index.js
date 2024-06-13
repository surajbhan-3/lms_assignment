const express = require("express")
const {sequelize} = require("./config/db")
require("dotenv").config();

const PORT = process.env.PORT || 3000


const app = express();
app.use(express.json())



//* Home route 

app.get("/", async(req,res)=>{

    try {
        res.status(200).send("Welcome to the Backend of Lms")
    } catch (error) {
        res.status(500).send(
            {
                "message":"Internal Server Errer",
                "Error":error.message,
                "result":false
            }
        )
    }
})


app.listen(PORT, async()=>{

    try {
        await sequelize.authenticate()
        console.log("Connection has been established successfully to the database")
    } catch (error) {
        console.log(error)
    }
    console.log(`Server is running at ${PORT}`)

})