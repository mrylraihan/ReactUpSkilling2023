import React, { useRef } from 'react'

function AddPost(props) {
    const titleRef = useRef()
    const bodyRef = useRef()

    const submitHandler = e => {
        e.preventDefault()
        let titleInput = titleRef.current.value
        let bodyInput = bodyRef.current.value
        props.setList(prev => {
            return [...prev, { id: prev.length + 1, userId: 1, title: titleInput, body:bodyInput}]
        })
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