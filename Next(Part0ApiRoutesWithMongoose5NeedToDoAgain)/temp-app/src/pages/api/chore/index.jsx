import Chore from '@/models/chore'
import connectMongo from '@/utils/connect'


async function handler(req, res) {
    await connectMongo()
    const chores = await Chore.find()
    res.json(chores)
}

export default handler