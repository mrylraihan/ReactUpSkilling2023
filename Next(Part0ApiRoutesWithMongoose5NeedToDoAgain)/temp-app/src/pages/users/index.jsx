import User from '@/models/user'
import connectMongo from '@/utils/connect'
import { useRouter } from 'next/router'
import React from 'react'

function AllUsers(props) {
    const router = useRouter()
    console.log(props)
  return (
    <div className='app'>
          <h1>All Users</h1>
          <ul>
                {
                    props.users.map((user, index)=>(<li key={user._id}
                    onClick={()=>router.push('/users/'+user._id)}
                    >{user.username}</li>))
                }
          </ul>
    </div>
  )
}

export default AllUsers

export const getServerSideProps= async ()=>{
    await connectMongo()
    let users = await User.find()
    users = JSON.stringify(users)
    users = JSON.parse(users)
    return {
        props: {users}, // will be passed to the page component as props
    }
}