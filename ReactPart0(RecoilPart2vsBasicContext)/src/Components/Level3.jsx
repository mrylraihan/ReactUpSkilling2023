import React, { useContext } from 'react'

import NameContext from '../store/name-context'
// import ListData from '../store/ListData'
function Level3() {
    // const [list, setList] = useRecoilState(ListData)
  const {name} = useContext(NameContext)
  
  console.log(name)
  return (
    <div>
          <p>Level3</p>
          {name.fullName && <h3>{name.fullName}</h3>}
    </div>
  )
}

export default Level3