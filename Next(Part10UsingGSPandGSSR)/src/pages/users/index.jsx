import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'

function users(props) {
    const router = useRouter()
    console.log(props)
    const navToDetails = (id) => {
        router.push('/users/' + id)
    }
  return (
    <div className='app'>
          <h1>users</h1>
          <ul>
              {props.users.map(ele => <li key={ele.name} onClick={navToDetails.bind(this, ele.id)}>{ele.name}</li>)}
          </ul>
    </div>
  )
}

export default users

export const getStaticProps = async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/users')
    const users = await result.data
    return {
        props: {
            users: users
        }
    }
}