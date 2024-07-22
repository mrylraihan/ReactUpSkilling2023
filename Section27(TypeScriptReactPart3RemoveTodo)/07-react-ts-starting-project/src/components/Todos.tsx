import React from 'react'
import Item from './Item'
import Todo from '../models/todo'

const Todos: React.FC<{ items: Todo[]; onRemoveItem:(id:string)=>void; children?: string }> = (
	props
) => {
	console.log(props)
	return (
		<div>
			<h1>Todos Page:</h1>
			<ul>
				{props.items.map((item: Todo) => (
					<Item
						key={item.id}
						item={item}
						getTargetID={(e: React.MouseEvent) =>
							console.log(e.currentTarget.id)
						}
						onRemoveItem={props.onRemoveItem.bind(this, item.id)}
					/>
				))}
			</ul>
		</div>
	)
}

export default Todos

// function Todos(props:{items:string[], children?:string}) {
//   return (
//     <div>
//         <h1>Todos Page:</h1>
//         <ul>
//             {props.items}
//         </ul>
//     </div>
//   )
// }

// export default Todos