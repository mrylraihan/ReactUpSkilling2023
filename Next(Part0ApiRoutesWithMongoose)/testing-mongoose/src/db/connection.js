import mongoose from "mongoose";

const connectionToDb = async () =>{
     // if(mongoose.connection.readyState === 1){
     //      return mongoose.connection.asPromise()
     // }
     return await mongoose.connect('mongodb://localhost/notesNext')
}
export default connectionToDb