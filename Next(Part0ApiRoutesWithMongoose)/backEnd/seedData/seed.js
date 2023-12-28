const mongoose = require('mongoose')
const Note = require('../models/NoteModel.js')

mongoose.connect('mongodb://localhost/notesNext')


const NoteList = [{ note: "clean clothes" }, { note: "clean dishes" }, { note: "clean bathroom" }]



const insertSeed = async () => {
    try {
        console.log(Note)
        await Note.deleteMany({})
        await Note.insertMany(NoteList)
        console.log('seeding is starting!')
        process.exit()
    } catch (err) {
        console.log(err)
    }
}

insertSeed()