import mongoose from "mongoose";


const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true, //createdAt & updatedAt will be added to the schema automatically
})

const Note = mongoose.models.Note || mongoose.model('Note', noteSchema)
export default Note