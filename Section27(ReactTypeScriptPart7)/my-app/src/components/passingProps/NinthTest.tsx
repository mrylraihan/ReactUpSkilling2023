import React, { useEffect, useState } from 'react'
import Post from '../../models/post'
import useToggle from '../../hooks/use-toggle'

const NinthTest:React.FC<{items:Post[]}>=(props)=> {
  const [toggle, setToggle] = useState(false)
  const [toggleCH, toggleHandlerCH] = useToggle(false)

  useEffect(()=>{
    console.log('useEffect')
    console.log(toggle)
  },[toggle])
  const handleClick = ()=>{
    setToggle(!toggle)
      console.log(props)
    }
  return (
    <div>
      <h1>NinthTest</h1>
      <button onClick={handleClick}>Click Toggle</button>
    </div>
  )
}

export default NinthTest