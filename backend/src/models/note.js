import mongoose from "mongoose"
//create a schema and then model
const noteschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
},{timestamps:true});

const Note=mongoose.model("Note",noteschema)

export default Note