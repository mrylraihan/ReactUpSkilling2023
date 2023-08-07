import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const [data, setData] = useState('')
    
    useEffect(()=>{
        fetch('https://api.kanye.rest')
            .then(res => res.json())
            .then(setData)
            .catch(console.error)
    },[])
    
    return data
}


export default useFetch