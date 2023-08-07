import React, { useState } from 'react'

function FormValidation() {
    const [name, setName] = useState('')
    const [nameBlur, setNameBlur] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState('')

    const nameIsValid = nameBlur && !name.trim()==''?true:false


    const onNameBlur = (e) => {
        setNameBlur(true)
        if(e.target.value.trim() === ''){
            setError('Name must not be Empty')
        }
        console.log(1)
    }
    const getName = e =>{
        setName(e.target.value)
        setError('')
    }
    const onSubmitHandler = e => {
        e.preventDefault()
        console.log('test')
        setData(name)
        setName('')
        setNameBlur(false)
    }

    return (
        <div>
            {data && <p>{data}</p>}
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Name :
                        <input type="text" value={name} onChange={getName} onBlur={onNameBlur}/>
                    </label>
                </div>
                {error && <p>{error}</p>}
                <button disabled={!nameIsValid}>Submit</button>
            </form>
        </div>
    )
}

export default FormValidation