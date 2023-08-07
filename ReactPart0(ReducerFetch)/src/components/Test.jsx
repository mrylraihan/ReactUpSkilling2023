import React, { useEffect, useReducer, useRef } from 'react'

const initial = ''
const dataReducer = (state, action)=>{
    if(action.type == 'GET'){
        return [...action.data]
    }else if(action.type == 'ADD'){
        return [...state, action.newData]
    }else if(action.type == 'DELETE'){
        const newData = state.filter((item, idx)=> idx !== +action.idx)
        return newData
    }else {
        return state
    }
}
function Test() {
    const [data, dispatch] = useReducer(dataReducer, initial)
    const titleRef = useRef()
    const bodyRef = useRef()

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((result) => dispatch({ type: "GET", data: result }))
            .catch(console.error)
    },[])

    const deleteHandler = (idx)=>{
  
        console.log(idx)
        dispatch({type:"DELETE", idx:idx})
    }

    const onSubmitHandler = e =>{
        e.preventDefault()
        let title = titleRef.current.value;
        let body = titleRef.current.value;
        const obj = { id:data.length + 1, title, body }
        console.log(obj)
        dispatch({ type: "ADD", newData:obj })
        titleRef.current.value=''
        bodyRef.current.value=''
    }

console.log(data)
  return (
    <>
    <div className='app'>
    <form onSubmit={onSubmitHandler}>
        <div>
            <label>title:
                <input type="text" ref={titleRef}/>
            </label>
        </div>
        <div>
            <label>body:
                <input type="text" ref={bodyRef}/>
            </label>    
        </div>
        <button type='submit'>submit</button>
    </form>
    </div>
    <div className='app'>
        <h3>Post</h3>
        <ul>
        {data.length > 1 && data.map((ele,idx)=>{
            return <div key={idx}>
                <li>{ele.title}</li>
                <button id={idx} onClick={deleteHandler.bind(this, idx)}>Delete</button>
            </div>
        })}
        </ul>
    </div>
    </>
  )
}

export default Test