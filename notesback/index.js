const express=require("express");
const app = express();
const connection=require("./config/db")
require("dotenv").config();
const cors=require("cors");
const userController = require("./routes/user.routes");
const notesController = require("./routes/notes.routes");
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>
{
    res.send("HomePage");
})

app.use("/user",userController);
app.use("/notes",notesController)

app.listen(process.env.PORT,async()=>
{
    try{
        await connection;
        console.log("Connected");
    }
    catch{
        console.log("Disconnected");
    }
    console.log("Server Started on port http://localhost:5000");
})