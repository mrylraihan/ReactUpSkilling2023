import React, { useContext } from 'react'
import NameContext from '../store/name-context'


function Level1() {
    
    // const ctx = useContext(NameContext)
    const {name, setName} = useContext(NameContext)

    const addFirstNameToAtom = (e)=>{
        setName(prev=>{
            return {...prev, firstName : e.target.value}
        })
    }
    const addLastNameToAtom = (e)=>{
        setName(prev=>{
            return {...prev, lastName : e.target.value}
        })
    }

    const submitHandler = e =>{
        e.preventDefault()
        setName(prev => {
            return { ...prev, fullName:`${prev.firstName} ${prev.lastName}`, firstName:'', lastName:'' }
        })
    }
    console.log(name)
  return (
    <div className='app'>
          <h1>Level1</h1>
          <form onSubmit={submitHandler}>
            <div>first-name: 
                <label>
                      <input type="text" value={name.firstName} onChange={addFirstNameToAtom}/>
                </label>
            </div>
            <div>last-name: 
                <label>
                      <input type="text" value={name.lastName} onChange={addLastNameToAtom}/>
                </label>
            </div>
            <button type='submit'>submit</button>
          </form>
    </div>
  )
}

export default Level1