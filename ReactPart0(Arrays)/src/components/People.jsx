import React, { useRef, useState } from 'react'

function People({ person, deleteHandler, editHandler}) {
    const [showEdit, setShowEdit] = useState(false)
    const nameRef = useRef()
    const onSubmitHandler = (e)=>{
        e.preventDefault()
        editHandler(person.id, nameRef.current.value)
        nameRef.current.value = ''
    }
  return (
    <div className='app'>
        <h1>{person.name}</h1>
          <button onClick={deleteHandler.bind(this,person.id)}>delete</button>
          <button onClick={setShowEdit.bind(this,!showEdit)}>edit</button>
          {showEdit && <form onSubmit={onSubmitHandler}>
              <div>
                  <label>Name:
                      <input type="text" ref={nameRef} />
                  </label>
              </div>
              <button type='submit'>submit</button>
          </form>}
    </div>
  )
}

export default People