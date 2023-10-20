import React, { useEffect, useState } from 'react'

function useFetch(url) {
    
    const [result, setResult] = useState('')
    useEffect(()=>{
            fetch(url)
            .then(res=>res.json())
            .then(setResult)
            .catch(console.error)
    }, [])

  return result
}

export default useFetch