import React, { useEffect } from 'react'
import { useState } from 'react'

function GetAll() {
    const [post, setPost] = useState([])
    const [trigger, setTrigger] = useState(false)
    let content = post.map(ele=><li key={ele.id}>{ele.title}</li>)
    useEffect(()=>{
        if(post.length>0){
            setPost([])
        }else{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then(setPost)
            .catch(console.error)
        }
    }, [trigger])


    const togglePost = () =>{
        setTrigger(!trigger)
    }
  return (
    <div>
          <h3>GetAll</h3>
          <button onClick={togglePost}>Get AllData</button>
          {post.length > 0 && content}
    </div>
  )
}

export default GetAll