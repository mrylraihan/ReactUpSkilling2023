// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "@/models/user"
import connectMongo from "@/utils/connect" 
export default async function handler(req, res) {
    await connectMongo()
    User.create(req.body)
    .then(newUser=>{
        console.log(newUser)
        res.status(200).json(newUser)
    })
    .catch(e=>res.json(e))
}
