import React , {useState, useRef} from 'react';

const SimpleInputRef = (props) => {
  // const [enteredName, setEnteredName] = useState('')
  const nameRef = useRef()
  const [error, setError] = useState(false)

  console.log(error)
  const formSubmissionHandler = e =>{
    e.preventDefault()
    if (nameRef.current.value.length <= 0) {
      setError(true)
    }else {
      nameRef.current.value = ''
    setError(false)
    }
  }
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'  ref={nameRef}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
      {error && <p>must not be empty</p>}
    </form>
  );
};

export default SimpleInputRef;
