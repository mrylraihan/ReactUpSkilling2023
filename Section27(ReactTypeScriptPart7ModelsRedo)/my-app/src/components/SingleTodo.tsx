import React from 'react'
import Todo from '../models/todo'

const SingleTodo:React.FC<{item:Todo}> =({item})=> {
    console.log(item)
  return (
		<li key={item.title}>
			<h1>{item.title}</h1>
            <p>{item.id}</p>
		</li>
	)
}

export default SingleTodo