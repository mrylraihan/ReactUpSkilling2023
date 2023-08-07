import React, { useRef, useState } from 'react'

function GetById() {
    const [post, setPost] = useState('')
    const refId = useRef()

    const getById = () =>{
        const id = refId.current.value
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(setPost)
            .catch(console.error)
    }

  return (
    <div>
          <h3>GetById</h3>
            <div>
                <label>pass an id:
                    <input type="number" ref={refId}/>
                </label>
                <button type='button' onClick={getById}>Submit</button>
            </div>

            {post && <div>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>}
    </div>
  )
}

export default GetById