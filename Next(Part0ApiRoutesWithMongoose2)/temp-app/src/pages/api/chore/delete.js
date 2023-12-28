import Chore from "@/models/choreModel";
import connectMongo from "@/utils/connectDb";
/**
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

export default async function deleteAllChores(req, res){
    try{

        console.log('CONNECTING TO MONGO')
        await connectMongo()
        console.log('DELETING ALL CHORES IN MONGO')
        // res.json(inputChore)
        await Chore.deleteMany({})
        res.json({message:"All data was deleted"})
    }catch(e){
        res.json(e)
    }

}