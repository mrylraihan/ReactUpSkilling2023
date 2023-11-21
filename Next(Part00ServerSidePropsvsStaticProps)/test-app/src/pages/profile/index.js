import React from 'react'

function Profile(props) {
    console.log(props)
  return (
    <div>Profile</div>
  )
}

export default Profile

export const getStaticProps = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
        props:{
            data:data
        }
    }
}