// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Note from "@/models/note";
import connectMongo from "@/utils/connect";

export default async function handler(req, res) {
    console.log(req.body)
    await connectMongo()
    Note.create(req.body)
        .then(notes => res.json(notes))
        .catch((err) => console.log(err));
}
