import React, { useState } from 'react'
import Preview from './Preview'

function SelectFormSimple() {
    const [optionPicked, setOptionsPicked] = useState('')
    const [pickedColor, setPickedColor] = useState('')
    const chooseColor = e =>{
        setOptionsPicked(e.target.value)
    }
    const onSubmitHandler = e =>{
        e.preventDefault()
        setPickedColor(optionPicked)
    }
  return (
    <div className='app'>
          <h1 style={{color:pickedColor}}>SelectFormSimple</h1>
          <form onSubmit={onSubmitHandler}>
              <select onChange={chooseColor} value={optionPicked}>
                  <option defaultValue={'red'}>red</option>
                  <option value={'blue'}>blue</option>
                  <option value={'green'}>green</option>
              </select>
              <button type='submit'>Submit</button>
          </form>
          <Preview color={pickedColor} />
    </div>
  )
}

export default SelectFormSimple