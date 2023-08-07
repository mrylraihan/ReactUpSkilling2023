import React from 'react'
import Card from '../Ui/Card'

function All({posts}) {
  let content = posts.map(ele=><Card ele={ele}/>)
  return (
    <div>
      {content}
    </div>
  )
}

export default All