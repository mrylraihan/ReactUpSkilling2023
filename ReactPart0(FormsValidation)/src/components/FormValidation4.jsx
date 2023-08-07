import React, { useState } from 'react'

function FormValidation4() {
    const [name, setName] = useState('')
    const [nameIsValid, setNameIsValid] = useState(false)
    const [nameIsTouched, setNameIsTouched] = useState(false)


    const isNotValid = nameIsTouched && !nameIsValid
    const getName = e =>{
        setName(e.target.value)
        setNameIsValid(true)
    }
    const onNameBlur = (e) =>{
        setNameIsTouched(true)
        if(e.target.value.trim()== ''){
            setNameIsValid(false)
        }
    }

    const onSubmitHandler = e =>{
        e.preventDefault()
        setNameIsTouched(true)
        if(name.trim()== ''){
            // setNameIsValid(false)
            return 
        }
        setNameIsValid(true)
        console.log(name)
    }
  return (
    <div>
        <form onSubmit={onSubmitHandler}>
              <div>
                  <label>Name :
                      <input type="text" onChange={getName} value={name} onBlur={onNameBlur}/>
                  </label>
              </div>
              {isNotValid && <p>Something is wrong try again!</p>}
              <button>submit</button>
        </form>
    </div>
  )
}

export default FormValidation4