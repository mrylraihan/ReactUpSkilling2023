function handler(req, res){
    if(req.method == "GET"){
        res.json({"message":"im working first route"})
    }else{
        res.json({message:"hey"})
    }
}

export default handler