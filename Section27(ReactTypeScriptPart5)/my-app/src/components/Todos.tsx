import React from 'react'
// to make prop optional in typescript we need to add ? after the key
const Todos: React.FC<{items:string[], children?:string}> = (props)=> {
  console.log(props)
  return (
		<div>
			<h1>Todos</h1>
			<ul>{props.items.map((ele:string)=><li key={ele}>{ele}</li>)}</ul>
		</div>
	)
}

export default Todos