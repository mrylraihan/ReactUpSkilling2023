import React, { useState, useEffect } from 'react'


function useFetch() {
    const [result, setResult] = useState('')

    useEffect(()=>{
        fetch('https://api.kanye.rest')
        .then(res=>res.json())
        .then(setResult)
        .catch(console.error)
    },[])

  return result
}

export default useFetch