import React , {useState, useRef} from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [error, setError] = useState(false)

  const nameInputHandler = e =>{
    setEnteredName(e.target.value)
    if(e.target.value.length<=0)setError(true)
  }
  console.log(error)
  const formSubmissionHandler = e =>{
    e.preventDefault()
  }
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'  onChange={nameInputHandler} value={enteredName}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
      {error && <p>must not be empty</p>}
    </form>
  );
};

export default SimpleInput;
