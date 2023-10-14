import React, { useEffect, useState } from 'react'


function Home(props) {
  const [data, setData] = useState(props.data)
 
  console.log("data", data)
  console.log("props", props)

  const deleteData = (id) =>{
    setData(prev=>{
      return prev.filter((item)=> item.id !== id )
    })
  }
  return (
    <div className='app'>
      <h1>Home</h1>
      {data.map(ele => <li key={ele.id} onClick={deleteData.bind(this, ele.id)}>{ele.title}</li>)}
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