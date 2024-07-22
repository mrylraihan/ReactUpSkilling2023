import React, { useRef, useState } from 'react'

const NewTodo:React.FC<{onAddTodo:(text:string)=>void}> = (props) => {
	const todoRef = useRef<HTMLInputElement>(null)
	const [test, setTest] = useState('')

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault()
		console.log(e)
		console.log(todoRef.current?.value )//might be null on this spot, reacts isn't smart enough to know that so it will error 
        const enteredText = todoRef.current!.value //your guarantee
		if(enteredText.trim().length === 0){
			return ;
		}
		props.onAddTodo(enteredText)
		todoRef.current!.value = ''
	}
	
	console.log(test)

	return (
		<>
			<div>
				<form onSubmit={submitHandler}>
					<div>
						<label htmlFor='text'>
							Todo Text:
							<input type='text' id='text' ref={todoRef}/>
						</label>
					</div>
					<button type='submit'>Submit</button>
				</form>
			</div>
			<div>
                <h3>{test}</h3>
				<label htmlFor='test'>
					Todo Text:
					<input
						value={test}
						type='text'
						id='test'
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setTest(e.target.value)
						}
					/>
				</label>
                <button onClick={()=>setTest('')}>clear</button>
			</div>
		</>
	)
}

export default NewTodo