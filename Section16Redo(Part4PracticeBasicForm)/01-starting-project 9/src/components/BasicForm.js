import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {value: firstName, hasError:hasErrorFirstN, isValid:firstNameIsValid, valueChangeHandler:firstNameChangeHandler, inputBlurHandler:firstNameOnBlur , reset:resetFirstName } = useInput(v=>v.trim()!=='')
  const {value: lastName, hasError:hasErrorLastN, isValid:lastNameIsValid, valueChangeHandler:lastNameChangeHandler, inputBlurHandler:lastNameOnBlur , reset:resetLastName } = useInput(v=>v.trim()!=='')
  const {value: email, hasError:hasErrorEmail, isValid:emailIsValid, valueChangeHandler:emailChangeHandler, inputBlurHandler:emailOnBlur , reset:resetEmail } = useInput(v=>v.includes('@'))
 

  let formIsValid = false
  if (firstNameIsValid, lastNameIsValid, emailIsValid){
    formIsValid = true
  }

  const OnSubmitHandler = e =>{
    e.preventDefault()
    resetEmail()
    resetFirstName()
    resetLastName()
  }
  return (
    <form onSubmit={OnSubmitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstName} onChange={firstNameChangeHandler} onBlur={firstNameOnBlur}/>
          {hasErrorFirstN && <p>error</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastName} onChange={lastNameChangeHandler} onBlur={lastNameOnBlur}/>
          {hasErrorLastN && <p>error</p>}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={email} onChange={emailChangeHandler} onBlur={emailOnBlur}/>
          {hasErrorEmail && <p>error</p>}
      </div>
      <div className='form-actions'>
        <button disabled={formIsValid?false:true}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
