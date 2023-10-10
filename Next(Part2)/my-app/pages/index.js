import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dataActions, populateData } from '@/store'
import { useRouter } from 'next/router'
function Home(props) {
  const data = useSelector(state => state.dataSlice)
  const dispatch = useDispatch()
  const router = useRouter()

  // With out action creater Thunks
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res=>res.json())
  //     .then(result => dispatch(dataActions.getData(result)))
  //     .then(()=>console.log('we Are populating data'))
  //     .catch(console.error)
   
  // },[])
  useEffect(()=>{
    dispatch(populateData())
  },[])
  console.log(data)
  console.log("props", props)

  const navigate = id => router.push('/'+id)
  return (
    <div className='app'>
      <h1>Home</h1>
      {props.data.map(ele=><button key={ele.id} onClick={navigate.bind(this, ele.id)}>{ele.id}</button>)}
    </div>
  )
}

export default Home

export const getStaticProps = ()=>{
  return fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(result=>{
    return {
      props:{
        data:result
      }
    }
  })
  .catch(console.error)
}