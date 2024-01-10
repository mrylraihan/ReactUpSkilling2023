import mongoose from "mongoose";

const choreSchema = new mongoose.Schema({
    title:'String', 
    description: 'String', 
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
}, {
    timestamps:true
})
// const Chore = mongoose.models.Chore || mongoose.model('Chore', choreSchema)
// export default Chore
mongoose.models = {};//have to do this because the one above wasnt working for some reason 
export default mongoose.model('Chore', choreSchema)