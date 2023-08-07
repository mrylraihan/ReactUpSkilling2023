import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function GetImage({setPost, post}) {
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        // console.log({ title: title, image: image })
        const data = new FormData()
        data.append('image', image)
        data.append('title', title)
        console.log(Object.fromEntries(data.entries()))
    //     const options = {
    //         method: 'POST',
    //         'content-type': 'multipart/form-data',
    //         body: data
    //     }
    //   fetch('http://localhost:4000/images/', options)
    //     .then(res=>res.json())
    //     .then(setPost)
    //     .catch(console.error)
    //     setImage('')
    //     setTitle('')
      axios.post('http://localhost:4000/images/', data)
        .then(res=>res.data)
        .then(setPost)
        .catch(console.error)
        
        setTitle('')
    }
    // console.log(post)
  return (
    <div>
          <h1>GetImage</h1>
          <form onSubmit={submitHandler}>
            <div>
                <label> title:
                    <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
                </label>
            </div>
            <div>
                <label>file upload
                      <input type="file" onChange={e=>setImage(e.target.files[0])}/>
                      {/* <input type="file"  accept='image/*' multiple name='image'onChange={e=>setImage(e.target.files[0])}/> */}
                </label>
            </div>
            <button>submit</button>
          </form>
    </div>
  )
}

export default GetImage