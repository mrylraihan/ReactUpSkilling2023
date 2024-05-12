import React from 'react'
import Todo from '../models/todo'

const TodoItem:React.FC<{item:Todo, children?:string}>= ({item})=> {
  return <li key={item.id}>{item.text}</li>
}

export default TodoItem