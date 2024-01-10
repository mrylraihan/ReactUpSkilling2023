// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Chore from "@/models/chore"

import connectMongo from "@/utils/connect"
export default async function handler(req, res) {
    await connectMongo()
    Chore.create(req.body)
        .then(newChore => {
            console.log(newChore)
            res.status(200).json(newChore)
        })
        .catch(e => res.json(e))
}
