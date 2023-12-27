import mongoose from "mongoose"
import Note from "@/models/NoteModel"
import connectionToDb from "@/db/connection"



async function handler(req, res) {
    // await mongoose.connect('mongodb://localhost/notesNext')
    await connectionToDb()
    const data = await Note.find()

    res.json(data)
    // await mongoose.connection.close();

}

// async function handler(req, res) {
//    await mongoose.connect('mongodb://localhost/notesNext')
//    const data = await Note.find()

//    res.json(data)

// }

export default handler
