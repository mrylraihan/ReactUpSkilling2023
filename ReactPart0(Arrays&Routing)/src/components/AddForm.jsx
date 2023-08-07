import React, { useRef } from 'react'

function AddForm({ addHandler, editHandler, option, idx, setEdit }) {
    const nameRef = useRef()

    const submitHandler = e =>{
        e.preventDefault()
        if(nameRef.current.value.trim().length>0)
        if(option == 'add'){
            addHandler(nameRef.current.value)
        }else if(option == 'edit'){
            editHandler(idx, nameRef.current.value )
            setEdit(false)
        }
        nameRef.current.value = ''
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='app'>
                <label>Name:
                    <input ref={nameRef} />
                </label>
                <button type='submit'>submit</button>
            </div>
        </form>
    )
}

export default AddForm