import mongoose from "mongoose"
import Note from "@/models/NoteModel"
import connectionToDb from "@/db/connection"



async function handler(req, res) {
    // await mongoose.connect('mongodb://localhost/notesNext')

    await connectionToDb()
    if(req.method ==="GET"){
        const data = await Note.find()
        res.json(data)
    }else if(req.method === 'POST'){
        const inputNote = req.body.note
        console.log(req.body)//{ note: value }
        let newNote = await Note.create(req.body)
        // let newNote = await Note.create({ note: inputNote })
        // await mongoose.connection.close();
        res.json(newNote)
    }
    // await mongoose.connection.close();

}

// async function handler(req, res) {
//    await mongoose.connect('mongodb://localhost/notesNext')
//    const data = await Note.find()

//    res.json(data)

// }

export default handler