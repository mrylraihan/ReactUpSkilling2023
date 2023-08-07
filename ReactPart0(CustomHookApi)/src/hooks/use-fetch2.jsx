import React, { useState, useEffect } from 'react'


function useFetch2() {
    const [result, setResult] = useState('')

    useEffect(()=>{
      getData()
    },[])

    const getData =()=>{
        fetch('https://api.kanye.rest')
        .then(res=>res.json())
        .then(setResult)
        .catch(console.error)
    }

  return [result, getData]
}

export default useFetch2