import React, { useRef } from 'react'

function AddPost(props) {
    const titleRef = useRef()
    const bodyRef = useRef()

    const submitHandler = e => {
        e.preventDefault()
        let titleInput = titleRef.current.value
        let bodyInput = bodyRef.current.value
        let data = {title: titleInput, body: bodyInput }

        fetch('http://localhost:4000/note', {
            method: 'POST',
            body: JSON.stringify({note:data}),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(console.log)
            .catch(console.error)
    }
    return (
        <div className='app'>
            <h1>AddPost</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>title:
                        <input type="text" ref={titleRef} />
                    </label>
                </div>
                <div>
                    <label>body:
                        <input type="text" ref={bodyRef} />
                    </label>
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default AddPost