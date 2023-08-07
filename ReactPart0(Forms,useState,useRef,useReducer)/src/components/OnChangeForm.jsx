import React, { useState } from 'react'

function OnChangeForm() {
    const [formData , setFormData] = useState({})
    const [fullName, setFullName] = useState('')

    const formHandler = e =>{
        const name = e.target.name;
        const value = e.target.value;
        setFormData(prev=>{
            return {...prev, [name]:value}
        })
    }
    const onSubmitHandler = e =>{
        e.preventDefault()
        setFullName(`${formData.firstName} ${formData.lastName}`)
     
        setFormData(prev => {
            return { ...prev, firstName: '', lastName:''}
        })
    }
    console.log(formData)
    console.log(fullName)
    return (
        <div className='app'>
            <h1>OnChangeForm</h1>
            {fullName && <h3>{fullName}</h3>}
            <form onChange={formHandler} onSubmit={onSubmitHandler}>
                <div>
                    <label>FirstName:
                        <input type="text" name='firstName' value={formData.firstName}/>
                    </label>
                </div>
                <div>
                    <label>LastName:
                        <input type="text" name='lastName' value={formData.lastName}/>
                    </label>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default OnChangeForm