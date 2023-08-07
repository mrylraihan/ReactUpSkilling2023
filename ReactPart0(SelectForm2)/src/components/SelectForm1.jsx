import React, { useState } from 'react'

function SelectForm1() {
    const [selected, setSelected] = useState('')

    const pickSomething = e =>{
        setSelected(e.target.value)
    }
    console.log(selected);
  return (
    <div>
          <h1>SelectForm1</h1>
          <select name="fruitList" id="fruit" value={selected} onChange={pickSomething}>
            <option defaultValue value={"orange"}>orange</option>
            <option value={"apple"}>Apple</option>
            <option value={"lemon"}>Lemon</option>
            <option value={"banana"}>Banana</option>
          </select>
          <h3>{selected}</h3>
    </div>
  )
}

export default SelectForm1