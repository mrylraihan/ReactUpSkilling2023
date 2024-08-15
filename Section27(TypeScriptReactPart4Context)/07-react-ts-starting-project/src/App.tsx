import Todos from './components/Todos'
import NewTodo from './components/NewTodo'
import { TodosContextProvider } from './store/todo-context'
function App() {
  // All of this was moved to the Context Provider
  // const [list, setList] = useState<Todo[]>(todoList)
  // const addTodoHandler = (text:string)=>{
  //   setList(prev=>{
  //     return prev.concat(new Todo(text))})
  // }
  // const removeTodoHandler = (id:string)=>{
  //   setList(prev=>{
  //     return prev.filter(ele=>ele.id!==id)
  //   })
  // }
  // Now we can remove all of these props 
  
  return (
    <TodosContextProvider>
		<div>
			<Todos/>
			<NewTodo/>
		</div>
    </TodosContextProvider>
	)
}

export default App