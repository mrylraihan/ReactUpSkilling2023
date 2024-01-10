// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import User from "@/models/user";
import connectMongo from "@/utils/connect";

export default async function handler(req, res) {
    console.log(req.body)
    await connectMongo()
    User.create(req.body)
        .then(users => res.json(users))
        .catch((err) => console.log(err));
}
