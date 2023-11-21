// you do not create a react component in the api folder instead functions 
// which contain server-side code, because api routes only run on the server 
// never on the client, and these functions are triggered when a request is 
// sent to this route 

import { MongoClient } from "mongodb";

// req: contains data about the incoming request
// res: contains the data we are sending back 
async function handler(req, res) {
    if(req.method == "POST"){
        const data = req.body;
        const {title, image, address, description} = data;

        const client = await MongoClient.connect('mongodb://localhost/testdb')
        const db = client.db()

        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.insertOne(data)
        console.log(result)
        client.close()
        res.status(201).json({message:"meetup inserted"})

    }

}

export default handler