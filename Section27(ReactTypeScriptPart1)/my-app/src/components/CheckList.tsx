import React from 'react'
// this is the other way to pass props into a component
function CheckList(props:{name:string, age:number, children:string}) {
  return (
    <div>
        <h1>{props.children}</h1>
        <p>{props.name}</p>
        <p>{props.age}</p>
    </div>
  )
}

export default CheckList