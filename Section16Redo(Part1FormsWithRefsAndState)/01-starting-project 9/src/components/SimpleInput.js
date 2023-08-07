import React , {useState, useRef} from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')


  const nameInputHandler = e =>{
    setEnteredName(e.target.value)
  }
  
  const formSubmissionHandler = e =>{
    e.preventDefault()
    console.log(enteredName)
    setEnteredName('')
    console.log(nameInputRef.current.value)
    nameInputRef.current.value = ''
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} onChange={nameInputHandler} value={enteredName}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
