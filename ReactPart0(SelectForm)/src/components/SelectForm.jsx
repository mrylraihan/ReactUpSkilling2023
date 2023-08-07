import React, { useState } from 'react'
import Preview2 from './Preview2'



function SelectForm() {
    const [optionPicked, setOptionPicked] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [pickedStyles, setPickedStyles] = useState({
        color:'',
        backgroundColor:'',
        fontSize:''
    })
    const chooseStyle = e =>{
        setOptionPicked(e.target.value)
    }

    const changeInput = e =>{
        setInputValue(e.target.value)
    }
   
    const submitHandler = (e)=>{
        e.preventDefault()
        if(optionPicked == 'color'){
            setPickedStyles(prev=>{
                return {...prev, color:inputValue}
            })
        } else if (optionPicked == 'backgroundColor') {
            setPickedStyles(prev => {
                return { ...prev, backgroundColor: inputValue }
            })
        } else if (optionPicked == 'fontSize') {
            setPickedStyles(prev => {
                return { ...prev, fontSize: inputValue + 'px' }
            })
        }
        setInputValue('')
    }

    console.log(inputValue);
    console.log(pickedStyles);
  return (
    <>
    <div className='app'>
          <form onSubmit={submitHandler}>
          <select onChange={chooseStyle} value={optionPicked}>
              <option>Pick a Style</option>
              <option value={'color'}>color</option>
              <option value={'backgroundColor'}>backgroundColor</option>
              <option value={'fontSize'}>fontSize</option>
          </select>
          <div>
          <label>type in a color or size:
              <input type="text" value={inputValue} onChange={changeInput}/>
          </label>
          </div>
          <button type='submit'>Submit</button>
        </form>
              <h3 style={{ color: pickedStyles.color || 'green', backgroundColor: pickedStyles.backgroundColor||'yellow', fontSize: pickedStyles.fontSize }}>Testing</h3>
              <Preview2 style={pickedStyles}/>
    </div>
    </>
  )
}

export default SelectForm