import Note from "../models/note.js"

export async function getallnotes(req,res){
   try {
    const notes =await Note.find()
    res.status(200).json(notes)
   } catch (error) {
    console.log(error)
    res.status(500).json({message:"Internal server problem"})
   }
}
export async function createnote(req,res){
    console.log("hey I am running");
    try{
        const {title,content}=req.body;
        const note=new Note({title,content});
        const savednote=await note.save();
        res.status(201).json(savednote)
    }
    catch(error){
        console.error("Error in creating the note:", error);
        res.status(500).json({ error: error});
    }
}
export async function updatenote(req,res){
  try{
    const {title,content}=req.body
    await Note.findByIdAndUpdate(req.params.id,{title,content})
    res.json({message:"note updated sucessfuly"})
  }
  catch(error){
    console.error("Error in creating the note:", error);
        res.status(500).json({ error: error});
  }
}
export function deletenote(req,res){
    res.send("you just fetched the notes");
}