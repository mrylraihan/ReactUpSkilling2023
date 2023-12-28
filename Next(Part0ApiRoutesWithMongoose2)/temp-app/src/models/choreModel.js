import {Schema, model, models} from 'mongoose'

const ChoreSchema = new Schema({
    chore:{
        type: String,
        required:true
    }
}, {
    timestamps:true
})
// everyTime the this page runs it will create a new model which is something we don't want to do 
const Chore = models.Chore || model('Chore', ChoreSchema)
export default Chore

// How it would look in express but we would use require(commonJS) instead of import syntax(es6)
// import  mongoose from 'mongoose'

// const ChoreSchema = new mongoose.Schema({
//     chore: {
//         type: String,
//         required: true
//     }
// }, {
//     timestamps: true
// })

// const Chore = mongoose.model('Chore', ChoreSchema)
// export default Chore