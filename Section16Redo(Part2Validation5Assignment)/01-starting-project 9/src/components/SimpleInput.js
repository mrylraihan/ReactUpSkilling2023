import React, { useState } from 'react';
// onblur is a built in event that fires when ever the event loses focus
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)


// name Validity
  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched
// email Validity
  const enteredEmailIsValid = enteredEmail.includes('@')
  const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched
  
  let formIsValid = false
  if(enteredNameIsValid && enteredEmailIsValid){
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
  const emailInputHandler = e => {
    setEnteredEmail(e.target.value)
    // setEnteredNameTouched(false)if you don't want it showing the error before getting of the input field
  }

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  }
  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = e => {
    e.preventDefault()

    setEnteredNameTouched(true)
    if(!enteredNameIsValid){
      return
    }

    console.log(enteredName)
    setEnteredName('')
    setEnteredEmail('')
    setEnteredNameTouched(false)
    setEnteredEmailTouched(false)
    
  }
  //this is checking if name is valid is false and is touched 
  
  const nameInputClasses = nameInputIsInValid ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputIsInValid ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputHandler} value={enteredName} onBlur={nameInputBlurHandler} />
        {nameInputIsInValid && <p className='error-text'>must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange={emailInputHandler} value={enteredEmail} onBlur={emailInputBlurHandler} />
        {emailInputIsInValid && <p className='error-text'>Please Enter Valid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid?true:false}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
