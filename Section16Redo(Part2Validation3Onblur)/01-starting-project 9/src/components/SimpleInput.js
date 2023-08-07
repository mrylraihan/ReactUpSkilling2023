import React, { useState, useRef, useEffect } from 'react';
// onblur is a built in event that fires when ever the event loses focus
const SimpleInput = (props) => {
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('name Input is Valid')
    }
  }, [enteredNameIsValid])

  const nameInputHandler = e => {
    setEnteredName(e.target.value)
    if (e.target.value.trim() !== '') {
      console.log('theres nothing here!')
      setEnteredNameIsValid(true)
    }
    
  }

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === '') {
      console.log('theres nothing here!')
      setEnteredNameIsValid(false)
    }

  }

  const formSubmissionHandler = e => {
    e.preventDefault()

    setEnteredNameTouched(true)
    if (enteredName.trim() === '') {
      console.log('theres nothing here!')
      setEnteredNameIsValid(false)
      return
    }
    setEnteredNameIsValid(true)

    console.log(enteredName)
    setEnteredName('')
    console.log(nameInputRef.current.value)
    nameInputRef.current.value = ''
  }
  //this is checking if name is valid is false and is touched 
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched
  const nameInputClasses = nameInputIsInValid ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} onChange={nameInputHandler} value={enteredName} onBlur={nameInputBlurHandler} />
        {nameInputIsInValid && <p className='error-text'>must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
