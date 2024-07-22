import React from 'react'
import Todo from '../models/todo'

// if you look at our onRemoveItem you notice we dont have any args, that is because we binded the function in Todos so now when this function is invoked we dont need to pass anything in to have to correct id 
const Item: React.FC<{
	item: Todo;
	onRemoveItem: () => void;
	getTargetID: (e: React.MouseEvent) => void
}> = (props) => {
  console.log(props)
	return (
		<li id={props.item.id} onClick={props.onRemoveItem}>
			{props.item.text}
		</li>
	)
}

export default Item