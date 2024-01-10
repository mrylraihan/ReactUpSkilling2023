import React, { useRef, useState } from 'react'

function add() {
    const [chore, setChore] = useState('')
    const titleRef = useRef()
    const descriptionRef = useRef()
    const ownerRef = useRef()

    const submitDataHandler = e => {
        e.preventDefault()
        const title = titleRef.current.value
        const description = descriptionRef.current.value
        const ownerId = ownerRef.current.value
        // console.log({username, password})
        fetch('../api/chore/add', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, description, owner:ownerId })
        })
            .then(res => res.json())
            .then(result => {
                setChore(result)
                console.log(result)
              titleRef.current.value = ''
              descriptionRef.current.value = ''
              ownerRef.current.value = ''
            })
            .catch(console.error)
    }
    return (
        <>
            <div className='app'>
                <form onSubmit={submitDataHandler}>
                    <div>
                        <label>Title:
                            <input type="text" ref={titleRef} />
                        </label>
                    </div>
                    <div>
                        <label>Description:
                            <input type="text" ref={descriptionRef} />
                        </label>
                    </div>
                    <div>
                        <label>Owner ID:
                            <input type="text" ref={ownerRef} />
                        </label>
                    </div>
                    <button type='submit'>submit</button>
                </form>
            </div>
            {chore.title && <div className='app'>
                <p>{chore.title}</p>
                <p>{chore.description}</p>
            </div>}
        </>
    )
}

export default add