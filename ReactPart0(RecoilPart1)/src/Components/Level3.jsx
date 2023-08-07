import React from 'react'
import { useRecoilValue } from 'recoil'
import ListSelector from '../store/ListSelector'
// import ListData from '../store/ListData'
function Level3() {
    // const [list, setList] = useRecoilState(ListData)
    const list = useRecoilValue(ListSelector)
    console.log(list)
  return (
    <div>
          <p>Level3</p>
          <ul>
          {list.length>1 && list.map((ele,idx)=><li key={idx}>{ele.name}</li>)}
          </ul>
    </div>
  )
}

export default Level3