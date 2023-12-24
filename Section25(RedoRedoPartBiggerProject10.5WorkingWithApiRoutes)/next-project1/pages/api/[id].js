const getById = (req, res)=>{
    // const params = req.params // doesnt work in api routes
    
    res.json({query:req.query, params:"does not work in api routes"})
}

export default getById;