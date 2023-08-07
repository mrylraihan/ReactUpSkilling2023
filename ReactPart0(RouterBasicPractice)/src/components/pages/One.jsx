import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function One() {
    const [singlePost, setSinglePost] = useState('')
    const params = useParams()
    const id = params.id
    const nav = useNavigate()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(setSinglePost)
            .catch(console.error)

    }, [id])

    return (
        <div className='app'>
            <h1>one</h1>
            {singlePost &&
                <>
                    <h3>{singlePost.title}</h3>
                    <p>{singlePost.body}</p>
                    <button onClick={nav.bind(this,-1)}>Go back!</button>
                </>
            }
        </div>
    )
}

export default One