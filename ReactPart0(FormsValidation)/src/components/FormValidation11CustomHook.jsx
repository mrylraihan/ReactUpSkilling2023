import React from 'react';
import useInput from '../hooks/use-input';

const FormValidation11 = (props) => {
    const [enteredName, isValid, isNotValid, nameInputHandler, nameInputBlurHandler, resetNameData ] = useInput(value=>value.trim() !=='')

    let formIsValid = false
    if (isValid) {
        formIsValid = true
    } 

    const formSubmissionHandler = e => {
        e.preventDefault()

        if (!isValid) {
            return
        }
        resetNameData()
        console.log(enteredName)
       

    }
    //this is checking if name is valid is false and is touched 

    return (
        <div className={'app'}>
            <h2>FormValidation 11 </h2>
            <form onSubmit={formSubmissionHandler}>
                <div >
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' id='name' onChange={nameInputHandler} value={enteredName} onBlur={nameInputBlurHandler} />
                    <button disabled={!formIsValid ? true : false}>Submit</button>
                </div>
                {isNotValid && <p>must not be empty</p>}
            </form>
        </div>
    );
};

export default FormValidation11;
