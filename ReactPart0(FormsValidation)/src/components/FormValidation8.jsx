import React, { useState } from 'react';
// onblur is a built in event that fires when ever the event loses focus
const FormValidation8 = (props) => {
    const [enteredName, setEnteredName] = useState('')
    // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false) we dont need this because we can derive the value of this state from the enteredName state 
    const [enteredNameTouched, setEnteredNameTouched] = useState(false)

    const enteredNameIsValid = enteredName.trim() !== ''
    const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched

    const nameInputHandler = e => {
        setEnteredName(e.target.value)
        // setEnteredNameTouched(false)if you don't want it showing the error before getting of the input field
    }

    const nameInputBlurHandler = (e) => {
        setEnteredNameTouched(true);
    }

    const formSubmissionHandler = e => {
        e.preventDefault()

        setEnteredNameTouched(true)
        if (!enteredNameIsValid) {
            return
        }

        console.log(enteredName)
        setEnteredName('')
        setEnteredNameTouched(false)

    }
    //this is checking if name is valid is false and is touched 

    return (
        <div className={'app'}>
            <h2>FormValidation 8 </h2>
        <form onSubmit={formSubmissionHandler}>
            <div >
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' onChange={nameInputHandler} value={enteredName} onBlur={nameInputBlurHandler} />
            <button>Submit</button>
            </div>
                {nameInputIsInValid && <p>must not be empty</p>}
        </form>
        </div>
    );
};

export default FormValidation8;
