import React from 'react'
// to make prop optional in typescript we need to add ? after the key
function Todos(props: { items: string[]; children?: any }) {
	console.log(props)
	return (
		<div>
			<h1>Todos</h1>
			<ul>
				{props.items.map((ele: string) => (
					<li key={ele}>{ele}</li>
				))}
			</ul>
		</div>
	)
}

export default Todos
