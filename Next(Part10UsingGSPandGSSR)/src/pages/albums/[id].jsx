import { useRouter } from 'next/router'
import React from 'react'

function singleAlbum(props) {
    const router = useRouter()
    const routerObj = router.query
    console.log(routerObj, 'router')
    console.log(props)
  return (
    <div className='app'>
          <h1>singleAlbum</h1>
          <h3>{props.album.title}</h3>
          <p>{props.id}</p>
    </div>
  )
}

export default singleAlbum

export const getServerSideProps = async ({params})=>{
    const id = params.id
    const result = await fetch('https://jsonplaceholder.typicode.com/albums/'+id)
    const album = await result.json()
    return {
        props:{
            id,
            album
        }
    }
}