import React from 'react'
import { useRecoilValue } from 'recoil'
import NameSelector from '../store/NameSelector'
// import NameData from '../store/NameData'
function Level3() {
    // const [name, setName] = useRecoilState(NameData)
  const name = useRecoilValue(NameSelector)
  const { fullName } = useRecoilValue(NameSelector)
  console.log(name)
  return (
    <div>
          <p>Level3</p>
          {fullName && <h3>{fullName}</h3>}
    </div>
  )
}

export default Level3