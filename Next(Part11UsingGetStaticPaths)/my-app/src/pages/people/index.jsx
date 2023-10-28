import Card from '@/components/UI/Card'
import React from 'react'

function index(props) {
  console.log(props)
  let content = props.users.map(ele=>{
    return <Card {...ele}/>
  })
  return (
    <>
    <div className='app'>
      <h1>All People</h1>
    </div>
    {content}
    </>
  )
}

export default index

export const getStaticProps = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await data.json()
  return {
    props: {
      users: users,
    }
  }
}