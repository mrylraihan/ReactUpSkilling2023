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
  // const [loadedMeetUps, setLoadedMeetUps] = useState(props.meetups)
  const router = useRouter()
  // useEffect(()=>{
  //   // Send http request and fetch data
  //   setLoadedMeetUps(DUMMY_MEETUPS)
  // })
  console.log(props)
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => router.push('new-meetup')}>Go to Meet up</button>
      <MeetupList meetups={props.meetups} />
      {/* <MeetupList meetups={loadedMeetUps} /> */}
      {/* <MeetupList meetups={DUMMY_MEETUPS} /> */}
    </>
  )
}

export default HomePage


export const getServerSideProps = async (context) => {
  const req = context.req
  const res = context.res
  console.log(req)
  console.log(res)
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

// export const getStaticProps = async () =>{

//   return {
//     props:{
//       meetups: DUMMY_MEETUPS
//     }, 
//     revalidate: 10 //will regenerate the static props every 10 seconds if request are made
//   }
// }