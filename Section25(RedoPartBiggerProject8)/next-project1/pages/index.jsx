import Layout from '@/components/layout/Layout'
import MeetupList from '@/components/meetups/MeetupList'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const DUMMY_MEETUPS = [
  {
    id: 'm1', 
    title: "A first meetup", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153", 
    address: "some address st, 122345, someCity",
    description: "this is a first meetup"
  },
  {
    id: 'm2', 
    title: "A first meetup2", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153", 
    address: "some address st, 122345, someCity",
    description: "this is a first meetup"
  },
  {
    id: 'm3', 
    title: "A first meetup3", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153", 
    address: "some address st, 122345, someCity",
    description: "this is a first meetup"
  },
]

function HomePage(props) {
  const router = useRouter()
  // console.log(props)
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => router.push('new-meetup')}>Go to Meet up</button>
      <MeetupList meetups={props.meetups} />
    </>
  )
}

// export function getStaticProps(){
// return fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res=>res.json())
//   .then(res=>{
//     return {
//       props: {
//         meetups: DUMMY_MEETUPS,
//         blogs: res
//       }
//     }
//   })
// }
export async function getStaticProps(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return {
    props:{
      meetups: DUMMY_MEETUPS,
      blogs: data
    }
  }
}

export default HomePage