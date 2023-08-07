import React, { useState } from 'react'

function TestTouched2() {
    const [name, setName] = useState('')
    const [isTouched, setIsTouched] = useState(false)
    const getNameValue = e =>{
        setName(e.target.value)
        nameIsTrue = true
    }
    const onBlurHandler = () => {
        setIsTouched(true)
    }
    let nameIsTrue = name.trim() !== ''
    const isTrue = nameIsTrue && isTouched 
    const isNotTrue = !nameIsTrue && isTouched

    console.log(isTrue, 'both')
    console.log(nameIsTrue, 'name is true')
    console.log(isTouched, 'from onBlur')
  return (
    <div className='app'>
          <h1>TestTouched2</h1>
          <form onSubmit={()=>{}}>
              <div>
                  <label>Name :
                      <input type="text" value={name} onChange={getNameValue} onBlur={onBlurHandler}/>
                      {isNotTrue && <p>error</p> }
                  </label>
              </div>
              {/* {isTouched && !isValid && <p>error</p>} */}
              <button>Submit</button>
          </form>
    </div>
  )
}

export default TestTouched2