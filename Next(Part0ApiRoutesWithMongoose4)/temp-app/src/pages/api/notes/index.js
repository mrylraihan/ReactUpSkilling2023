// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Note from "@/models/note";
import connectMongo from "@/utils/connect";

export default async function handler(req, res) {
   await connectMongo()
   Note.find().populate('owner')
   .then(notes=>{
   console.log(notes)
      return res.json(notes)
   })
   .catch(err=>res.json(err))
}
