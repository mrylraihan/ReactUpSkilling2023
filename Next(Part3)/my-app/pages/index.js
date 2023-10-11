import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dataActions } from '@/store'

function Home(props) {
  const data = useSelector(state => state.dataSlice)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(dataActions.getData(props.data))
  },[])
  console.log("data", data)
  console.log("props", props)


  return (
    <div className='app'>
      <h1>Home</h1>
      {props.data.map(ele => <li key={ele.id}>{ele.title}</li>)}
    </div>
  )
}

export default Home

export const getStaticProps = async () => {


  let data = await fetch('https://jsonplaceholder.typicode.com/posts')
  data = await data.json()
  return {
    props: {
      data: data
    }
  }


}

// export const getStaticProps = () => {
//   return fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     // .then(result => {
//     //   dispatch(dataActions.getData(result))
//     //   return result
//     // })
//     .then(result => {
//       return {
//         props: {
//           data: result
//         }
//       }
//     })
//     .catch(console.error)
// }