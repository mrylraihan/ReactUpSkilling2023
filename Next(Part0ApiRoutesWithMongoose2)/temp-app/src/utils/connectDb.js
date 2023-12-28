import mongoose from "mongoose";

const connectMongo = async () => mongoose.connect(process.env.MONGO_URI)
// export const connectMongo = async () => mongoose.connect('mongodb://localhost/notesNext')
export default connectMongo