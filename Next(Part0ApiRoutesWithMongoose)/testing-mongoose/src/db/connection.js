import mongoose from "mongoose";

const connectionToDb = async () =>{
     // console.log(mongoose.connection.readyState)
     // if(mongoose.connection.readyState === 1){
     //      console.log('in continue connection')
     //       mongoose.connection.asPromise()
     // }else{
          console.log('starting new connection')
          await mongoose.connect('mongodb://localhost/notesNext')
     // }
}
export default connectionToDb