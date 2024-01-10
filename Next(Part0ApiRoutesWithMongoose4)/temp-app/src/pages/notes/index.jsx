import { useRouter } from 'next/router'
import React from 'react'

function allNotes({ data }) {
  const router = useRouter()
  console.log(data)
  return (
    <>
      <div className='app'>
        <h1>allNotes</h1>
        <button onClick={()=>router.push('/')}>Go Home</button>
      </div>

      {data.length > 0 && data.map((item) => <div key={item._id} className='app'>
        <h3><strong>Title</strong>:{item.title}</h3>
        <p><strong>Description</strong>:{item.description}</p>
        {/* <p><strong>Owner ID</strong>:{item.owner}</p> */}
        <button onClick={()=>router.push(`/notes/${item._id}`)}>See Notes Details</button>
      </div>)}
    </>
  )
}

export default allNotes

export const getServerSideProps = async () => {
  let data = await fetch('http://localhost:3000/api/notes')
  data = await data.json()
  return {
    props: { data: data },// will be passed to the page component as props
  }
}
