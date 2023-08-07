
import { useRef, useState } from 'react';
import './App.css';
import People from './components/People';

const DUMMY_Data = [
  {name:'Wallie', id:0},
  {name:'Heshow', id:1},
  {name:'Meshia', id:2},
]
function App() {
  const [people, setPeople] = useState(DUMMY_Data)
  const nameRef = useRef()
  
  const onSubmitHandler = e =>{
    e.preventDefault()
    setPeople(prev=>[...prev,{name:nameRef.current.value,id:people.length}])
    nameRef.current.value = ''
  }
  
  const deleteHandler = (id)=>setPeople(prev=>prev.filter(ele=>ele.id !== id))
  
  const editHandler = (id, newName)=>{
    setPeople(prev=>{
      return prev.map(ele=>{
        if(ele.id == id){
          return {...ele, name: newName}
        }else{
          return ele
        }
      })
    }
  )
    // setPeople(prev => {
    //   prev[id].name = newName
    //   return [...prev]
    // })
  }
  
  let content = people.map(ele => <People person={ele} key={ele.id} deleteHandler={deleteHandler} editHandler={editHandler}/>)
  console.log(people)
  return (
    <>
    <div className="app">
      <h3>Add People</h3>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Name:
            <input type="text" ref={nameRef}/>
          </label>
        </div>
        <button type='submit'>submit</button>
      </form>
    </div>
    {content}
    </>
  );
}

export default App;
