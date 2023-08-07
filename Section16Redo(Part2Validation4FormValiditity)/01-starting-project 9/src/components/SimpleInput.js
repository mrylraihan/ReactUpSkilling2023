import React, { useEffect, useState } from 'react';
// onblur is a built in event that fires when ever the event loses focus
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false) we dont need this because we can derive the value of this state from the enteredName state 
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  // const [formIsValid, setFormIsValid] = useState(false)


  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched
  let formIsValid = false
  if(enteredNameIsValid){
    formIsValid = true
  }
  // useEffect(()=>{
  //   if(enteredNameIsValid){
  //     setFormIsValid(true)
  //   }else{
  //     setFormIsValid(false)
  //   }
  // },[enteredNameIsValid])
  
  const nameInputHandler = e => {
    setEnteredName(e.target.value)
    // setEnteredNameTouched(false)if you don't want it showing the error before getting of the input field
  }

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  }

  const formSubmissionHandler = e => {
    e.preventDefault()

    setEnteredNameTouched(true)
    if(!enteredNameIsValid){
      return
    }

    console.log(enteredName)
    setEnteredName('')
    setEnteredNameTouched(false)
    
  }
  //this is checking if name is valid is false and is touched 
  
  const nameInputClasses = nameInputIsInValid ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputHandler} value={enteredName} onBlur={nameInputBlurHandler} />
        {nameInputIsInValid && <p className='error-text'>must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid?true:false}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
