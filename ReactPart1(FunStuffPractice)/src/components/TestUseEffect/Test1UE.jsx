import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Test1UE() {
    const [headerText, setHeaderText] = useState('')
    useEffect(()=>{
        setHeaderText('This is useEffect with an empty []')
        console.log('useEffect working');
    },[])
  return (
    <div className='app'>
          <h1>Test1UE</h1>
          <p>{headerText}</p>
    </div>
  )
}

export default Test1UE