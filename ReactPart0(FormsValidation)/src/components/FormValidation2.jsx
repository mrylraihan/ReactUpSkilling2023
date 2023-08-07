import React, { useState } from 'react'

function FormValidation2() {
    const [name, setName] = useState('')
    const [nameBlur, setNameBlur] = useState(false)
    const [error, setError] = useState('')

    const isValid = nameBlur && name.trim() != '' 
    console.log(isValid)
    const getName = e =>{
        setName(e.target.value)
        setError('')
    }
    const onNameBlur = e =>{
        setNameBlur(true)
        if(!e.target.value.trim()){
            setError('Name must not be empty')
        }
    }
    const onSubmitHandler = e=>{
        e.preventDefault()
        setName('')
        setNameBlur(false)
    }
    return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label> NAME :
                    <input type="text" value={name} onChange={getName} onBlur={onNameBlur}/>
                </label>
            </div>
                <button disabled={!isValid}>submit</button>
        </form>
        {error && <p>{error}</p>}
    </div>
  )
}

export default FormValidation2