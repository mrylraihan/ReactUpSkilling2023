import { useRouter } from 'next/router'
import React from 'react'

function albums(props) {
    const router = useRouter()
    console.log(props)
    const navToDetails = (id) =>{
        router.push('/albums/'+id)
    }
  return (
    <div className='app'>
          <h1>albums</h1>
          <ul>
              {props.albums.map(ele => <li key={ele.title} onClick={navToDetails.bind(this, ele.id)}>{ele.title}</li>)}
          </ul>
    </div>
  )
}

export default albums

export const getStaticProps = async()=>{
    const result = await fetch('https://jsonplaceholder.typicode.com/albums')
    const albums = await result.json()
    return {
        props:{
            albums:albums
        }
    }
}