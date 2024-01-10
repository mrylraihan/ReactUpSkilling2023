import { MongoClient } from "mongodb";
// this allows us to connect to the specific mongodb database

const handler = async(req, res)=>{
    if(req.method === 'POST'){
        const data = req.body;
        // res.json(req.body)
        // connecting to db
        console.log(data)
        const client = await MongoClient.connect('mongodb://localhost/testdb')
        // getting ahold of the db 
        const db = client.db()
        // getting specific collection 
        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.insertOne(data)
        client.close()
        console.log(result)
        res.status(201).json({message:'meetup inserted', data:result})

    }
}

export default handler