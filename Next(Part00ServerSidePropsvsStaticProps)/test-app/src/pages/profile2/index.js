import React from 'react'

function Profile(props) {
    console.log(props)
  return (
    <div>Profile</div>
  )
}

export default Profile

export const getServerSideProps = async (context)=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(context.params)
    console.log(context.query)
    return {
        props:{
            data:data,
        }
    }
}