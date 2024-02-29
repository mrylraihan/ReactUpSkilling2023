export default async function handler (req,res){
    const id = req.query.id
    let data = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    data = await data.json()

    res.status(201).json(data)
}