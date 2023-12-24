const handler = async(req, res)=>{
    if(req.method === 'POST'){
        const data = req.body;
        const {title, image, address, description} = data;
        
        // Store in a database
    }
}

export default handler