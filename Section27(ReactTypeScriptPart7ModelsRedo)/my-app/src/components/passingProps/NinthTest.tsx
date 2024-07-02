import React from 'react'
type Data = {
    id:number,
    stats:number[]
}
const NinthTest:React.FC<{data?:Data}>=(props)=> {
    console.log(props)
  return (
    <div>NinthTest</div>
  )
}

export default NinthTest