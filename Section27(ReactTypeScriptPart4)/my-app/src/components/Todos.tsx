import React from 'react'

function Todos(props:{items:string[], children:string}) {
  console.log(props)
  return (
		<div>
			<h1>Todos</h1>
			<ul>{props.items.map((ele:string)=><li key={ele}>{ele}</li>)}</ul>
		</div>
	)
}

export default Todos