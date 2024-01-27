import MeetupList from '@/components/meetups/MeetupList'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {MongoClient} from 'mongodb'

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
  const [loadedMeetUps, setLoadedMeetUps] = useState([])
  const router = useRouter()
  useEffect(()=>{
    // Send http request and fetch data
    setLoadedMeetUps(DUMMY_MEETUPS)
  })
let data = props.meetups
  console.log(props, 'props')
  // console.log(loadedMeetUps)
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => router.push('new-meetup')}>Go to Meet up</button>
      <MeetupList meetups={data} />
      {/* <MeetupList meetups={DUMMY_MEETUPS} /> */}
    </>
  )
}

export default HomePage

// export async function getStaticProps(){
// // Fetch data from an api 
// const result = await fetch('http://localhost:3000/api')
// const data = await result.json();
//   return {
//     props:{
//       meetups: data.data,
//       revalidate:10 //will revalidate the data every 10 seconds
//     }
//   };
// }

export async function getStaticProps(){
   const client = await MongoClient.connect('mongodb://localhost/testdb')
			const db = client.db()
			// grabbing the collection in the db
			const meetupsCollection = db.collection('meetups')
			// now we can run our db methods and use insertOne
			const result = await meetupsCollection.find().toArray()
			console.log(result)
			// now we want to close the connection
			client.close()
			// and now finally send a response
			return {
        props:{
          meetups:result.map(ele=>{
        return {
          title:ele.title, 
          address:ele.address,
          image:ele.image,
          id:ele._id.toString(),
        }
      }),
          revalidate:10
        }
      }
}