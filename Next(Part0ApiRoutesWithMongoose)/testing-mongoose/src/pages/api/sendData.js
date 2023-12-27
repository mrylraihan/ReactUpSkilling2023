import mongoose from "mongoose"
import Note from "@/models/NoteModel"
import connectionToDb from "@/db/connection"

async function handler (req, res){
    await connectionToDb()
    const inputNote = req.body.inputNote

    let newNote = await Note.create({note:inputNote})
    // newNote = await newNote.json() 
    // await mongoose.connection.close();
    res.json(newNote)

    
}

export default handler