import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
	items: Todo[]
	addTodo: (text: string) => void
	removeTodo: (id: string) => void
}

const TodoContext = React.createContext<TodosContextObj>({
	items: [],
	addTodo: (text: string) => {},
	removeTodo: (id: string) => {},
})


const todoList = [new Todo('Learn React'), new Todo('Learn TypeScript')]

export const TodosContextProvider:React.FC=(props)=>{
    const [list, setList] = useState<Todo[]>(todoList)
    
    const addTodoHandler = (text: string) => {
        setList((prev) => {
            return prev.concat(new Todo(text))
        })
    }
    const removeTodoHandler = (id: string) => {
        setList((prev) => {
            return prev.filter((ele) => ele.id !== id)
        })
    }
    const contextValue: TodosContextObj = {
        items: list,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    }
    return <TodoContext.Provider value={contextValue}>
        {props.children}
    </TodoContext.Provider>

}
export default TodoContext