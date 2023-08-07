import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)
  const nameInputRef = useRef()
 
  const nameInputChangeHandler = e =>{
    setEnteredName(e.target.value)

  }

  const formSubmissionHandler = e =>{
    e.preventDefault()
    if(enteredName.trim() == ''){
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
  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} value={enteredName} type='text' id='name' onChange={nameInputChangeHandler}/>
        {!enteredNameIsValid && <p className="error-text">name should not be empty!</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    
    </form>
  );
};

export default SimpleInput;
