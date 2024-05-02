import React from 'react'
import Todo from '../models/todo'
// to make prop optional in typescript we need to add ? after the key
const Todos:React.FC<{items:Todo[], children?:any}> = (props)=>{
  console.log(props)
  return (
		<div>
			<h1>Todos</h1>
			<p>{props.children}</p>
			<ul>{props.items.map((ele:Todo)=><li key={ele.id}>{ele.title}</li>)}</ul>
		</div>
	)
}

export default Todos