// this route would imitate 
// /about/:id 
export default function handler (req, res){
   const id = req.query.id
    res.json({id:id})
}
