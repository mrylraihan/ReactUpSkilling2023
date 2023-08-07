import React, {useState} from 'react'

function TestTouched() {
    const [name, setName] = useState('')
    const [isTouched, setIsTouched] = useState(false)
    const [isValid, setIsValid] = useState(false)


    const getNameInput = e =>{

      setName(e.target.value)
      setIsTouched(true)
      setIsValid(true)
    }
    const onBlurHandler = () =>{
      setIsTouched(true)
      if(name.trim()==''){
        setIsValid(false)
        return 
      }
        setIsValid(true)
      
    }

    const onSubmitHandler = e =>{
      e.preventDefault()
      setIsTouched(true)
      if (name.trim() == ''){
        setIsValid(false)
        return
      }
        setIsValid(true)
        setName('')
        setIsTouched(false)
      
      
    }
    console.log(name, 'name')
    console.log(isTouched, 'isTouched')
    console.log(isValid, 'isValid')
  return (
    <div className='app'>
          <h1>TestTouched</h1>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Name :
                    <input type="text" value={name} onChange={getNameInput} onBlur={onBlurHandler}/>
                </label>
            </div>
            {isTouched && !isValid &&<p>error</p>}
            <button>Submit</button>
        </form>
    </div>
  )
}

export default TestTouched