import { MongoClient } from "mongodb"

const handler = async(req, res)=>{
const client = await MongoClient.connect('mongodb://localhost/testdb2')
	const db = client.db()
	const gundamCollection = db.collection('gundam')
	const result = await gundamCollection.find().toArray()
	client.close()
      console.log(result)
			res.status(201).json({ message: 'Gundam List', data: result })
}

export default handler