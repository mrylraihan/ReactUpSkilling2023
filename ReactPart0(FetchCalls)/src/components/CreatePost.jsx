import React, { useState } from 'react'

function CreatePost() {
    const [input, setInput] = useState({ title: '', body: ''})
    const [post, setPost] = useState('')
    const getTitle = (e) =>{
        setInput(prev=>{
            return {...prev, title:e.target.value}
        })
    }
    const getBody = (e) =>{
        setInput(prev=>{
            return {...prev, body:e.target.value}
        })
    }

    const submitHandler = e =>{
        e.preventDefault()
        const options = {
            method:"POST", 
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
            body:JSON.stringify({
                title:input.title, 
                body:input.body,
                userId:1
            })
        }
        fetch('https://jsonplaceholder.typicode.com/posts', options)
        .then(res=>res.json())
        .then(setPost)
        .then(()=>setInput(prev=>{return {...prev, title:'', body:''}}))
        .catch(console.error)
    }
    console.log(input);
    console.log(post);
  return (
    <div>
          <h3>CreatePost</h3>
          <form onSubmit={submitHandler}>
            <div>
                <label>title:
                    <input type="text" value={input.title} onChange={getTitle}/>
                </label>
            </div>
            <div>
                <label>body:
                    <input type="text" value={input.body} onChange={getBody}/>
                </label>
            </div>
            <button type='submit'>Submit</button>
          </form>
         {post && <div>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            </div>}
    </div>
  )
}

export default CreatePost