import User from '@/models/user'
import connectMongo from '@/utils/connect'
import { useRouter } from 'next/router'
import React from 'react'

function userDetails(props) {
    const router = useRouter()
    console.log(props)
  return (
    <div className='app'>
          <h1>userDetails</h1>
          <p>{props.singleUser.username}</p>
          <p>{props.singleUser.password}</p>
          <p>{props.singleUser._id}</p>
          <button onClick={()=>router.push('/users')}>Go Back</button>
    </div>
  )
}

export default userDetails

export const getServerSideProps=async(context)=>{
    const id = context.params.id
    await connectMongo()

    let singleUser = await User.findById(id)
    singleUser = JSON.stringify(singleUser)
    singleUser = JSON.parse(singleUser)
    return {
        props:{
            singleUser
        }
    }
}