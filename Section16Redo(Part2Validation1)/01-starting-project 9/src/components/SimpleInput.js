import React , {useState, useRef} from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)

  const nameInputHandler = e =>{
    setEnteredName(e.target.value)
    setEnteredNameIsValid(true)
  }
  
  const formSubmissionHandler = e =>{
    e.preventDefault()

    if(enteredName.trim() ===''){
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
  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} onChange={nameInputHandler} value={enteredName}/>
      {!enteredNameIsValid && <p className='error-text'>must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
