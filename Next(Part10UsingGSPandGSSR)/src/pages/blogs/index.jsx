import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'

function blogs(props) {
    const router = useRouter()
    const navToDetails = (id) => {
        router.push('/blogs/' + id)
    }
  return (
      <div className='app'>
          <h1>blogs</h1>
          <ul>
              {props.blogs.map(ele => <li key={ele.title} onClick={navToDetails.bind(this, ele.id)}>{ele.title}</li>)}
          </ul>
      </div>
  )
}

export default blogs

export const getStaticProps = async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const blogs = await result.data
    return {
        props: {
            blogs: blogs
        }
    }
}