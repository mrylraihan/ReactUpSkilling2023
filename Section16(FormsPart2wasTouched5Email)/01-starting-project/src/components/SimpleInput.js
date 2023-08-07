import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)

  const enteredEmailIsValid = enteredEmail.includes('@') && enteredEmailTouched ? true : false;
  const enteredNameIsValid = enteredName.trim() && enteredNameTouched ? true : false;
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched;
  
  useEffect(() => {
    if(enteredNameIsValid && enteredEmailIsValid )setFormIsValid(true)
    else setFormIsValid(false)
  }, [enteredNameIsValid, enteredEmailIsValid])

  
  const nameInputChangeHandler = e => {
    setEnteredName(e.target.value)
    //  if(e.target.value.trim() !== '')setEnteredNameIsValid(true)
  }
  const emailInputChangeHandler = e => {
    setEnteredEmail(e.target.value)
    //  if(e.target.value.trim() !== '')setEnteredNameIsValid(true)
  }

  const nameInputBlurHandler = e => {
    setEnteredNameTouched(true)
    // if (enteredName.trim() === '') {
    //   // setEnteredNameIsValid(false)
    //   return
    // }else{
    //   setEnteredNameIsValid(true)
    // }
  }
  const emailInputBlurHandler = e => {
    setEnteredEmailTouched(true)
    // if (enteredName.trim() === '') {
    //   // setEnteredNameIsValid(false)
    //   return
    // }else{
    //   setEnteredNameIsValid(true)
    // }
  }

  const formSubmissionHandler = e => {
    e.preventDefault()

    setEnteredNameTouched(true)
    setEnteredEmailTouched(true)

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return
    }
    console.log(enteredName, 'In Submit')
    // const enteredValue = nameInputRef.current.value
    // console.log(enteredValue);
    // nameInputRef.current.value = ''
    setEnteredName('')
    setEnteredEmail('')
    setEnteredNameTouched(false)
    setEnteredEmailTouched(false)

  }

  const nameInputClasses = nameInputIsInValid ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} type='text' id='name' onBlur={nameInputBlurHandler} onChange={nameInputChangeHandler} />
        {nameInputIsInValid && <p className="error-text">name should not be empty!</p>}
        <label htmlFor='email'>Your Email</label>
        <input value={enteredEmail} type='email' id='email' onBlur={emailInputBlurHandler} onChange={emailInputChangeHandler} />
        {emailInputIsInValid && <p className="error-text">email should not be empty!</p>}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>Submit</button>
      </div>

    </form>
  );
};

export default SimpleInput;
