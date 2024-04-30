import React from 'react'
// to make prop optional in typescript we need to add ? after the key
const Todos:React.FC<{items:string[], children?:any}> = (props)=>{
  console.log(props)
  return (
		<div>
			<h1>Todos</h1>
			<p>{props.children}</p>
			<ul>{props.items.map((ele:string)=><li key={ele}>{ele}</li>)}</ul>
		</div>
	)
}

export default Todos