import React from 'react'

function AllPost(props) {
  let content = props.blogList.map(ele=><li key={ele.title}>{ele.title}</li>)
  console.log(props.blogList)

  return (
    <div className='app'>
      <h1>AllPost</h1>
      <ul>
        {content}
      </ul>
    </div>
  )
}

export default AllPost