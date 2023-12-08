import React, { useEffect } from 'react'

function More() {
    useEffect(()=>{
        fetch('./api/moreData')
        .then(res=>res.json())
        .then(console.log)
        .catch(console.error)
    },[])
  return (
    <div className='app'>
          <h1>More</h1>
    </div>
  )
}

export default More