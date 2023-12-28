import Chore from "@/models/choreModel";
import connectMongo from "@/utils/connectDb";
/**
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

export default async function getChores(req, res) {
    console.log('CONNECTING TO MONGO')
    await connectMongo()
    console.log('GETTING ALL CHORES IN MONGO')
    const result = await Chore.find()
    res.json(result)
}