import React from 'react'
import { useState } from 'react'

function SelectForm() {
    const [select, setSelect] = useState('Wallie')
    console.log(select)
  return (
    <div className='app'>
          <h1>SelectForm</h1>
          <h1>{select}</h1>
          <select id='nameList' value={select} onChange={e=>setSelect(e.target.value)}>
              <option name="Wallie"  value={'Wallie'}>Wallie</option>
              <option name="Heshow" value={'Heshow'}>Heshow</option>
              <option name="Meshia" value={'Meshia'}>Meshia</option>
          </select>
    </div>
  )
}

export default SelectForm