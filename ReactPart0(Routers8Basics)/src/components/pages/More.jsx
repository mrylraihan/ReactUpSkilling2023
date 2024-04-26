import React from 'react'
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom'

function More() {
  const loader = useLoaderData()
  const nav = useNavigate()//navigating the screen 
  const navigation = useNavigation()//get status of navigating between pages

  console.log(loader)
  console.log(nav)
  console.log(navigation)
  if(navigation.status == 'loading'){
    return (
      <div className='app'>Loading</div>
    )
  }
  return (
    <div className='app'>
        <h1>More</h1>
        <code>{loader.quote}</code>
        <button onClick={nav.bind(this, '/')}>Go Home</button>
    </div>
  )
}

export default More

export const dataLoader = async ()=>{
const res = await fetch('https://api.kanye.rest')
const response = await res.json()
return response 

}