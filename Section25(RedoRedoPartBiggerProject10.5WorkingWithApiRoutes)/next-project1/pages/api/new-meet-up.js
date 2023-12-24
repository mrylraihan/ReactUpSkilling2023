export default function handler (req, res){
    if(req.method === "POST"){
        const data = req.body;
    }else{
        res.json({message:"Testing other http request!"})
    }
}