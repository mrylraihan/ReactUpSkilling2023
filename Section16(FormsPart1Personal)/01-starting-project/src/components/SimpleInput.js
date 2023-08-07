import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const nameInputRef = useRef()
  const [isShort, setIsShort] = useState(false)
  let contentError = 'Error'
  if(!isShort){
    contentError=''
  }
  const onBlurHandler = e =>{
    if (e.target.value.length > 5 || e.target.value.length == 0){
      setIsShort(false)
    }else{
      setIsShort(true)
    }
  }

  const nameInputChangeHandler = e =>{
    setEnteredName(e.target.value)
    setIsShort(false)
  }

  const formSubmissionHandler = e =>{
    e.preventDefault()
    if(enteredName.trim() == ''){
      return 
    }
    console.log(enteredName, 'insubmit')
    // const enteredValue = nameInputRef.current.value
    // console.log(enteredValue);
    // nameInputRef.current.value = ''
    setEnteredName('')

  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} value={enteredName} type='text' id='name' onChange={nameInputChangeHandler} onBlur={onBlurHandler}/>
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
      <p>{contentError}</p>
    </form>
  );
};

export default SimpleInput;
