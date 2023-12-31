import {MongoClient} from 'mongodb'
const handler = async(req, res)=>{
    if(req.method === 'POST'){
        const data = req.body;
        // const {title, image, address, description} = data;
        // Store in a database
        const client = await MongoClient.connect('mongodb://localhost/testdb')
        const db = client.db();

        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.insertOne(data)
        console.log(result)
        client.close()
        res.status(201).json({message:"Messaged Inserted", data:result})
    }else{
        const client = await MongoClient.connect('mongodb://localhost/testdb')
        const db = client.db();

        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.find().toArray()
        console.log(result)
        client.close()
        res.status(201).json( result )
    }
}

export default handler