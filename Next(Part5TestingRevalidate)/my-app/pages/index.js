import React, { useEffect, useState } from 'react'


function Home(props) {
  const [data, setData] = useState(props.data)
 
  console.log("data", data)
  console.log("props", props)

  const deleteData = (id) =>{
    setData(prev=>{
      return prev.filter((item)=> item._id !== id )
    })
  }
  return (
    <div className='app'>
      <h1>Home</h1>
      {data.map(ele => <li key={ele._id} onClick={deleteData.bind(this, ele._id)}>{ele.title}</li>)}
    </div>
  )
}

export default Home

export const getStaticProps = async () => {


  let data = await fetch('http://localhost:4000/chores')
  data = await data.json()
  return {
    props: {
      data: data
    },
    revalidate:10
  }


}
