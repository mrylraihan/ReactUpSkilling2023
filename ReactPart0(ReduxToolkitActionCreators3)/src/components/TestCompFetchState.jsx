import React, { useEffect, useState } from 'react'

function TestCompRedux() {
  const [list, setList] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(setList)
      .catch(console.error)
  },[])

  const deletePost = (id) =>{
    setList(prev=>{
      return prev.filter((item)=> item.id !== id )
    })
  }

  let content = list.map(ele => <li key={ele.id} onClick={deletePost.bind(this, ele.id)}>{ele.title}</li>)
  return (
    <div>
      <h1 onClick={()=>setToggle(!toggle)}>TestCompRedux</h1>
     <ul>{toggle && content}</ul>
    </div>
  )
}

export default TestCompRedux