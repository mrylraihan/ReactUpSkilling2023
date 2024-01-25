import { MongoClient } from "mongodb";

const handler = async(req, res)=>{
    if(req.method === 'POST'){
        const data = req.body;
        
        // Store in a database
        const client = await MongoClient.connect('mongodb://localhost/testdb')
				const db = client.db()
				// grabbing the collection in the db
				const meetupsCollection = db.collection('meetups')
				// now we can run our db methods and use insertOne
				const result = await meetupsCollection.insertOne(data)
				console.log(result)
				// now we want to close the connection
				client.close()
				// and now finally send a response
				res.status(201).json({ message: 'Messaged Inserted', data: result })
    }
}

export default handler