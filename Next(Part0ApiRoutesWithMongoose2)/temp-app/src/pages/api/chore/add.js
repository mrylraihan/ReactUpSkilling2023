import Chore from "@/models/choreModel";
import connectMongo from "@/utils/connectDb";
/**
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

export default async function addChore(req, res){
    const inputChore = req.body.chore;
    console.log(req.body)
    console.log('CONNECTING TO MONGO')
    await connectMongo()
    console.log('CREATING IN MONGO')
    // res.json(inputChore)
    const result = await Chore.create({ chore: inputChore })
    res.json(result)

}