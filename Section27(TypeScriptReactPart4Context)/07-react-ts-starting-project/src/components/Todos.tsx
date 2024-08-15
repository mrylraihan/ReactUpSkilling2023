import React, {useContext} from 'react'
import Item from './Item'
import Todo from '../models/todo'
import { TodosContextProvider } from '../store/todo-context'
import TodoContext from '../store/todo-context'
const Todos: React.FC = (props) => {
	const todosCtx = useContext(TodoContext)
	console.log(todosCtx)
	
	return (
		<div>
			<h1>Todos Page:</h1>
			<ul>
				{todosCtx.items.map((item: Todo) => (
					<Item
						key={item.id}
						item={item}
						getTargetID={(e: React.MouseEvent) =>
							console.log(e.currentTarget.id)
						}
						onRemoveItem={todosCtx.removeTodo.bind(this, item.id)}
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