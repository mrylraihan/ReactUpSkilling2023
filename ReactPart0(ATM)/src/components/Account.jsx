import React, { useEffect, useState } from 'react'

function Account(props) {
    const [total, setTotal] = useState(0)
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState(false)

    useEffect(()=>{
        setTotal(props.total)
    },[])

    const inputValueHandler = e =>{
        setInputValue(e.target.value)
        setError(false)
    }
    const dwAmount = (op)=>{
        if(op == "+"){
            if(+inputValue> 0){
                setTotal(prev=>prev + +inputValue)
                setInputValue('')
            }else{
                setInputValue('')
                setError(true)
                return
            }
        }else if(op == '-'){
            if (+inputValue > 0 && +inputValue<total) {
                setTotal(prev => prev - +inputValue)
                setInputValue('')
            } else {
                setInputValue('')
                setError(true)
                return
            }
        }
    }
  return (
    <div>
          <p>Account {props.title}</p>
          <p>{total}</p>
          <div>
            <label> insert amount :
                <input type="number" value={inputValue} onChange={inputValueHandler} />
            </label>
          </div>
          {error &&<p>please enter correct amount</p>}
          <button onClick={dwAmount.bind(this,"-")}>withdraw</button>
          <button onClick={dwAmount.bind(this, "+")}>deposit</button>
    </div>
  )
}

export default Account