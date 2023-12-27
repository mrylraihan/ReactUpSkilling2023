import React from 'react'

function handler(req, res) {
  res.json(req.query)
}

export default handler