import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const nameInputRef = useRef()
  

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('name input is valid')
    }
  }, [enteredNameIsValid])


  const nameInputChangeHandler = e =>{
    setEnteredName(e.target.value)
  }

  const nameInputBlurHandler = e =>{
    setEnteredNameTouched(true)
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return
    }else{
      setEnteredNameIsValid(true)
    }
  }

  const formSubmissionHandler = e =>{
    e.preventDefault()

    setEnteredNameTouched(true)

    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false)
      return 
    }
    setEnteredNameIsValid(true)
    console.log(enteredName, 'In Submit')
    // const enteredValue = nameInputRef.current.value
    // console.log(enteredValue);
    // nameInputRef.current.value = ''
    setEnteredName('')

  }
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInValid ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} value={enteredName} type='text' id='name' onBlur={nameInputBlurHandler} onChange={nameInputChangeHandler}/>
        {nameInputIsInValid &&  <p className="error-text">name should not be empty!</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    
    </form>
  );
};

export default SimpleInput;
