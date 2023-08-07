
import { useState } from 'react';
import './App.css';
import { useRef } from 'react';

const DUMMY_DATA = [
  { id: 1, name: "Wallie" },
  { id: 2, name: "Ronnie" },
  { id: 3, name: "William" },
]
function App() {
  const [arr, setArr] = useState(DUMMY_DATA)
  const nameRef = useRef()
  const editRef = useRef()
  const idRef = useRef()

  const addPerson = e =>{
    e.preventDefault()
    const name = nameRef.current.value
    setArr(prev=>prev.concat({id:prev.length+1, name}))
    nameRef.current.value = ''
  }

  const editPerson = e =>{
    e.preventDefault()
    const name = editRef.current.value
    const id = idRef.current.value
    // setArr(prev => prev.map(ele=>{
    //   if(ele.id == id){
    //     return {...ele, name:name}
    //   }
    //   return ele
    // }))
    setArr(prev => {//ghetto way
      prev[id].name = name
      return [...prev]
    })
    editRef.current.value = ''
    idRef.current.value = ''
  }

  console.log(arr)
  return (
    <>
      <div className="app">
        <h1>Hello</h1>
      </div>
      <div className='app'>
        <form onSubmit={addPerson}>
          <div>
            <label>Name:
              <input type="text" ref={nameRef}/>
            </label>
            <button type='submit'>Submit!</button>
          </div>
        </form>
      </div>
      <div className='app'>
        <ul>
          {arr.map(ele => <li key={ele.id}>{ele.name}</li>)}
        </ul>
      </div>
      <div className='app'>
      <form onSubmit={editPerson}>
        <div>
          <label>Name:
            <input type="text" ref={editRef} />
          </label>
        </div>
        <div>
          <label>ID:
            <input type="text" ref={idRef} />
          </label>
        </div>
          <button type='submit'>Submit!</button>
      </form>
      </div>
    </>
  );
}

export default App;
