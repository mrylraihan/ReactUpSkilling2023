import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

function Home() {
    const [searchParams, setSearchParams] = useSearchParams()
    // useEffect(()=>{
    //     // how to set your queryparams or you can set in the link(Navbar)
    //     setSearchParams({ mode: 'home' })
    // }, [])
    // the only way you can access your queryparams is with this get method
    // you use your get method on the key you provided
    console.log(searchParams.get('mode'))
    console.log(searchParams)
    const toggleQueryParam = ()=>{
        setSearchParams(searchParams.get('mode') === 'home' ? { mode: 'notHome' } : { mode: 'home' })
    }
  return (
    <div className='app'>
          <h1>{searchParams.get('mode')=='home'?'Home':'Not Home'}</h1>
          <p>{searchParams.get('mode')}</p>
          <button onClick={toggleQueryParam}>toggle Query Param</button>
    </div>
  )
}

export default Home