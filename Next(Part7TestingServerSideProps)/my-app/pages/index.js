import { useRouter } from 'next/router'
import React, { useState } from 'react'


function Home(props) {
  const [data, setData] = useState(props.data)
  const router = useRouter()
  // console.log("data", data)
  console.log("props", props)


  const deleteData =  (id) =>{
    setData(prev=>{
      return prev.filter((item)=> item.id !== id )
    })
  }
  const details = (id)=>{
    router.push(`post/${id}`)
  }
  return (
    <div className='app'>
      <h1>Home</h1>

      {data.map(ele => <div key={ele.id}>
        <p> {ele.title}</p>
        <button onClick={deleteData.bind(this, ele.id)}>delete</button>
        <button onClick={details.bind(this, ele.id)}>details</button>
      </div>)}
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
