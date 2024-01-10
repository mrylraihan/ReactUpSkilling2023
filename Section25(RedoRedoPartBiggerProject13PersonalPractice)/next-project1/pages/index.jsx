import { MongoClient } from "mongodb";
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

function HomePage({meetups}) {
  const [loadedMeetUps, setLoadedMeetUps] = useState([])
  const router = useRouter()
  useEffect(()=>{
    // Send http request and fetch data
    setLoadedMeetUps(meetups)
  })

  console.log(meetups, 'props')
  console.log(loadedMeetUps)
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => router.push('new-meetup')}>Go to Meet up</button>
      <MeetupList meetups={meetups} />
      {/* <MeetupList meetups={DUMMY_MEETUPS} /> */}
    </>
  )
}

export default HomePage

export async function getStaticProps(){
// Fetch data from an api 
  const client = await MongoClient.connect('mongodb://localhost/testdb')
  // getting ahold of the db 
  const db = client.db()
  // getting specific collection 
  const meetupsCollection = db.collection('meetups')
  const data = await meetupsCollection.find().toArray()
  client.close()
  return {
    props:{
      meetups:data.map(ele=>{
        return {
          title:ele.title, 
          address:ele.address,
          image:ele.image,
          id:ele._id.toString(),
        }
      }),
      revalidate:1 //will revalidate the data every 10 seconds
    }
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // const params  = context.param;
//   // const query = context.query;

// // Fetch data from an api 
//   return {
//     props:{
//       meetups: DUMMY_MEETUPS,
//       // params,
//       // query,
//       revalidate:10 //will revalidate the data every 10 seconds
//     }
//   };
// }