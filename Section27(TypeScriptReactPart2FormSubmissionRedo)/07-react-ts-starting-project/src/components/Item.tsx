import React from 'react'
import Todo from '../models/todo'


const Item:React.FC<{item:Todo, onRemoveTodo:(id:string)=>void}>=(props)=> {
  const testButton = () =>console.log("test")
  return (
    <li>
      {props.item.text}
      <button onClick={props.onRemoveTodo.bind(this, props.item.id)}>delete</button>
    </li>
  )
}

export default Item