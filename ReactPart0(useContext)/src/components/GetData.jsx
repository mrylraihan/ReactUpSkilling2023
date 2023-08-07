import React, { useContext } from 'react'
import NameContext from '../store/name-context'

function GetData() {
    const ctx = useContext(NameContext)
  return (
    <div className='app'>
          <h4>GetData</h4>
          <div>
            <label>
                Type in name: 
                <input type="text" value={ctx.name} onChange={(e)=>ctx.setName(e.target.value)}/>
            </label>
          </div>
    </div>
  )
}

export default GetData