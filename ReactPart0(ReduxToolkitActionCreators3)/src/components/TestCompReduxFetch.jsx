import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataActions, getData } from '../store'
function TestCompReduxFetch() {

  const state = useSelector(state=>state)
  const dispatch = useDispatch()

  console.log(state)

  useEffect(() => {
   dispatch(getData())
  },[])

  const deletePost = (id) =>{
    dispatch(dataActions.removeData({id:id}))
  }

  let content = state.data.map(ele => <li key={ele.id} onClick={deletePost.bind(this, ele.id)}>{ele.title}</li>)
  return (
    <div>
      <h1>TestCompReduxFetch</h1>
      <ul>{content}</ul>
    </div>
  )
}

export default TestCompReduxFetch