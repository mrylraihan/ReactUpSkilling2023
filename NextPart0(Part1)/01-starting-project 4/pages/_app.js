import { useEffect, useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [post, setPost] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(setPost)
    .catch(console.error)
  },[])
  return <Component {...pageProps} post={post} setPost={setPost}/>
}

export default MyApp
