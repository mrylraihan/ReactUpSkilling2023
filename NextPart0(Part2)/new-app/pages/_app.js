import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [allPost, setAllPost] = useState([])
  const router = useRouter()
  const removePost = (id)=>{
    let filteredData = allPost.filter(ele=>ele.id!=id)
    setAllPost(filteredData)
    router.back()
  }
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(setAllPost)
    .catch(console.error)
  }, [])
  console.log(allPost)
  return <Navbar><Component {...pageProps} allPost={allPost} setAllPost={setAllPost} removePost={removePost}/></Navbar>
}
