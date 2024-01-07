import { MongoClient } from 'mongodb'
const handler = async(req, res)=>{
    if(req.method === 'POST'){
        const data = req.body;
        const {title, image, address, description} = data;
        
        // Store in a database
        // connecting to mongo db and specific db
       const client = await MongoClient.connect('mongodb://localhost/testdb')
       const db = client.db()
        // grabbing the collection in the db
        const meetupsCollection = db.collection('meetups')
        // now we can run our db methods and use insertOne
        const result = await meetupsCollection.insertOne(data)
        console.log(result)
        // now we want to close the connection 
        client.close();
        // and now finally send a response 
        res.status(201).json({ message: "Messaged Inserted", data: result })
    }else{
        const client = await MongoClient.connect('mongodb://localhost/testdb')
        const db = client.db();

        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.find().toArray()
        console.log(result)
        client.close()
        res.status(201).json(result)
    }
}

export default handler