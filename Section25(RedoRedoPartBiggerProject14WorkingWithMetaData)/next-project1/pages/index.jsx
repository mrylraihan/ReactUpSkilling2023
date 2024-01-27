import { MongoClient } from "mongodb";
import MeetupList from '@/components/meetups/MeetupList'
import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'



function HomePage({meetups}) {
  const router = useRouter()
  console.log(meetups, 'props')

  return (
		<>
			<Head>
				<title>React Meetups</title>
        <meta name='description' content='active react meetups!'/>
			</Head>
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