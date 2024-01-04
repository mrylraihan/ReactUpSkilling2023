// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import User from "@/models/user";
import connectMongo from "@/utils/connect";

export default async function handler(req, res) {
  await connectMongo()
  User.find()
  .then(users=>res.json(users))
  .catch((err)=>console.log(err));
}
