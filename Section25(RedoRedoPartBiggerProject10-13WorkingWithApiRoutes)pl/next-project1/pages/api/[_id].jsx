import { MongoClient, ObjectId } from "mongodb"

const handler = async(req, res)=>{
    const meetupId = req.query._id
      const client = await MongoClient.connect('mongodb://localhost/testdb')
			// getting ahold of the db
			const db = client.db()
			// getting specific collection
			const meetupsCollection = db.collection('meetups')
			const data = await meetupsCollection.findOne({
				_id: new ObjectId(meetupId),
			})
			client.close()
			console.log(meetupId)
            res.json(data)


}
export default handler 