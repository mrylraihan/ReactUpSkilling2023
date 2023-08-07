import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [allPost, setPost] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(setPost)
    .catch(console.error)
  },[])
  return <Component {...pageProps} allPost={allPost}/>
}
