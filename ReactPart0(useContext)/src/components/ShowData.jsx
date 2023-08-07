import React, { useContext } from 'react'
import NameContext from '../store/name-context'

function ShowData() {
    const ctx = useContext(NameContext)
  return (
    <div className='app'>
          <h4>ShowData</h4>
          {ctx.name && <p>{ctx.name}</p>}
    </div>
  )
}

export default ShowData