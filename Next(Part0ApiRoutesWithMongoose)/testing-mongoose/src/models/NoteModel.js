import mongoose from 'mongoose'
const noteSchema = new mongoose.Schema({
    note: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Note = mongoose.model('Note', noteSchema)
export default  Note