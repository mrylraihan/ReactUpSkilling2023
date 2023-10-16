import React, { useEffect, useState } from 'react'


function Home(props) {
  // const [data, setData] = useState(props.data)
 
  // console.log("data", data)
  console.log("props", props)

  const deleteData = async (id) =>{
    // setData(prev=>{
    //   return prev.filter((item)=> item._id !== id )
    // })
    fetch('http://localhost:4000/chores/' + id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }})
      .then(res=>res.json())
      .then(result=>console.log(result))
      .catch(console.error)

  }
  return (
    <div className='app'>
      <h1>Home</h1>
      {props.data.map(ele => <li key={ele._id} onClick={deleteData.bind(this, ele._id)}>{ele.title}</li>)}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {


  let data = await fetch('http://localhost:4000/chores')
  data = await data.json()
  return {
    props: {
      data: data
    }
  }


}
