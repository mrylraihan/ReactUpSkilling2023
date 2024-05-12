import React from 'react'
import Todo from '../models/todo'
import TodoItem from './TodoItem'
// to make prop optional in typescript we need to add ? after the key
// const Todos:React.FC<{items:{text:string, id:string}[], children?:any}> = (props)=>{
const Todos:React.FC<{items:Todo[], children?:any}> = (props)=>{
  console.log(props)
  return (
		<div>
			<h1>Todos</h1>
			<p>{props.children}</p>
			<ul>{props.items.map((ele:Todo)=><TodoItem item={ele} key={ele.text}/>)}</ul>
		</div>
	)
}

export default Todos