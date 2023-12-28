import mongoose from "mongoose"
import Note from "@/models/NoteModel"
import connectionToDb from "@/db/connection"

async function handler (req, res){
  const note = req.body.note
  await connectionToDb()
  const result = await Note.create({note:note})
  res.json(result)

    
}

export default handler