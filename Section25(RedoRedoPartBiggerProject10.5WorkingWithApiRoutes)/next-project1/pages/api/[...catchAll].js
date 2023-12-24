const handler = (req, res)=>{
    const {catchAll} = req.query
    res.json({ catchAll: catchAll.join('/') })
}

export default handler