import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function All({chores}) {
  // const [chores, setChores] = useState([])
  const router = useRouter()
  useEffect(()=>{
    fetch('./api/chore')
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
      // setChores(result)
    })
  },[])
  return (
    <div className='app'>
      <h1>All Chores</h1>
      <button onClick={() => router.push('/')}>Go home</button>
      <ul>
        {chores.length>0 && chores.map(ele=><li key={ele._id}>{ele.chore}</li>)}
      </ul>
    </div>
  )
}

export default All
// // if data is not being planned on getting modified
// export const getStaticProps = ()=>{
//   return fetch('http://localhost:3000/api/chore')
//     .then(res => res.json())
//     .then(result => {
//       console.log(result)
//       // setChores(result)
//       return {
//         props:{
//           chores:result
//         }
//       }
//     })
// }

export const getServerSideProps = ()=>{
  return fetch('http://localhost:3000/api/chore')
    .then(res => res.json())
    .then(result => {
      console.log(result)
      // setChores(result)
      return {
        props:{
          chores:result
        }
      }
    })
}