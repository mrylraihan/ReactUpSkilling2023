import React from 'react'
import { useRecoilValue } from 'recoil'
import ListSelector from '../store/NameSelector'
import NameData from '../store/NameData'

function Level3() {
  
  const { fullName } = useRecoilValue(NameData)
  // console.log(name)
  return (
    <div>
          <p>Level3</p>
          {fullName && <h3>{fullName}</h3>}
    </div>
  )
}

export default Level3