import React, { useRef, useState } from 'react'

function add() {
  const [newNote, setNote] = useState('')
  const titleRef = useRef()
  const descriptionRef = useRef()
  const ownerRef = useRef()

  const onSubmitHandler = e => {
    e.preventDefault()
    const body = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      owner: ownerRef.current.value,
    }

    fetch('../api/notes/create', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
    .then(res=>res.json())
    .then(result =>{
      titleRef.current.value = ''
      descriptionRef.current.value = ''
      ownerRef.current.value = ''
      setNote(result)
      console.log(result)})
    .catch(console.error)

    
  }
  return (
    <>
    <div className='app'>
      <h1>create a Note</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label><strong>Title:</strong>
            <input type="text" ref={titleRef} />
          </label>
        </div>
        <div>
          <label><strong>Description:</strong>
            <input type="text" ref={descriptionRef} />
          </label>
        </div>
        <div>
          <label><strong>Owner:</strong>
            <input type="text" ref={ownerRef} />
          </label>
        </div>
        <button type='submit'>submit</button>
      </form>
    </div>
      {newNote && <div className='app'>
      <p>{newNote.title}</p>
    </div>}
    </>
  )
}

export default add