import React, { useEffect, useState } from 'react'

const useFetch2 = (url) => {
    const [data, setData] = useState('')
    const [toggle, setToggle] = useState(false)
    useEffect(()=>{
        fetch('https://api.kanye.rest')
            .then(res => res.json())
            .then(setData)
            .catch(console.error)
    },[toggle])
    
    const toggleData = () =>{
        setToggle(!toggle)
    }

    return [data, toggleData]
}


export default useFetch2