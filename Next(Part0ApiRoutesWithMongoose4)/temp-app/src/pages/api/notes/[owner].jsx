import Note from "@/models/note";
import connectMongo from "@/utils/connect";

export default async function handler(req, res) {
    const ownerId = req.query.owner
    await connectMongo()
    Note.find({owner:ownerId})
        .then(notes =>res.json(notes))
        .catch(err => res.json(err))
}
