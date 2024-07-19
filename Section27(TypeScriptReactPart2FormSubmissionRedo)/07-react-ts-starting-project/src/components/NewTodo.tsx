import React, { useRef } from 'react'
import Todo from '../models/todo'

const NewTodo: React.FC<{addTodo:(text:string)=>void}> = (props)=>{
    const textRef = useRef<HTMLInputElement>(null)

    const onsubmitHandler = (e:React.FormEvent) =>{
        e.preventDefault()
        const enteredText = textRef.current!.value
		if(enteredText.trim().length !== 0){
			props.addTodo(textRef.current!.value)
		}
		console.log('oops no data')
		textRef.current!.value= ""
    }
  return (
		<div>
			<form onSubmit={onsubmitHandler}>
				<label htmlFor='text'>Todo Text</label>
				<input type='text' id='text' ref={textRef} />
				<button type='submit'>Add Todo</button>
			</form>
		</div>
	)
}

export default NewTodo