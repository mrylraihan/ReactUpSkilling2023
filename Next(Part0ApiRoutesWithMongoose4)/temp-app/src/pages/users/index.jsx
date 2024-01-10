import { useRouter } from 'next/router'
import React from 'react'

function index({data}) {
    console.log(data)
    const router = useRouter()
    const goToDetailsPage = id =>router.push(`users/${id}`)
  return (
    <>
    <div className='app'>
          <h1>All Users</h1>
          <button onClick={()=>router.push('/')}>Go Home</button>
    </div>
    {data.map(ele=>{
        return <div className='app' key={ele._id}>
            <h4>USERNAME:{ele.userName}</h4>
            <p>EMAIL:{ele.email}</p>
            <p>PASSWORD:{ele.password}</p>
            <p>ID:{ele._id}</p>
            <button onClick={()=>goToDetailsPage(ele._id)}>see more</button>
        </div>
    })}
    </>
  )
}

export default index

export const getServerSideProps = async () =>{
    const res = await fetch('http://localhost:3000/api/users')
    const data = await res.json();
    return {
        props:{data}
    }
}