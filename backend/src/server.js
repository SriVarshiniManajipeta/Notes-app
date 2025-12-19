import express from "express"
import notesroutes from "./notes/notesroutes.js"
import {connectdb} from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js"
dotenv.config();
const app=express();
const PORT=process.env.PORT||8000

//middleware
app.use(express.json());
app.use(rateLimiter)
app.use("/api/notes",notesroutes)

connectdb().then(()=>{app.listen(PORT,()=>{
    console.log("server started on port: ",PORT);
})
})


//mongodb+srv://msrivarshini05_db_user:vJl8AJd2Hlz0eZPW@cluster0.hxbxqea.mongodb.net/?appName=Cluster0