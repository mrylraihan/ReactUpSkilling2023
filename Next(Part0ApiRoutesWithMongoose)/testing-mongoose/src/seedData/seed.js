const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/notesNext')

const Note = require('../models/NoteModel')



const NoteList = [{ note: "clean clothes" }, { note: "clean dishes" }, { note: "clean bathroom" }]



const insertSeed = async () => {
    try {
      
        await Note.deleteMany({})
        await Note.insertMany(NoteList)
        console.log('seeding is starting!')
        process.exit()
    } catch (err) {
        console.log(err)
    }
}

insertSeed()