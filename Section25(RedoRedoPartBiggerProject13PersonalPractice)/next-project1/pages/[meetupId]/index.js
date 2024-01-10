import MeetupDetails from '@/components/meetups/MeetupDetails'
import { useRouter } from 'next/router'
import React from 'react'
import { MongoClient , ObjectId} from 'mongodb'
function index(props) {
  const router = useRouter()
  let meetupId = router.query.meetupId
  console.log(meetupId)
  console.log(props, ":Props")
  console.log(router.query, ":Router")
  console.log(props.meetupData)
  return (
    <>
      <MeetupDetails image={props.meetupData.image} title={props.meetupData.title} description={props.meetupData.description} address={props.meetupData.address} id={props.meetupData.id}/>

    </>
  )
}

export default index

// export async function getStaticPaths(context){
//   const client = await MongoClient.connect('mongodb://localhost/testdb')
//   // getting ahold of the db 
//   const db = client.db()
//   // getting specific collection 
//   const meetupsCollection = db.collection('meetups')
//   const data = await meetupsCollection.find({}, {_id:1}).toArray()
//   client.close()

//   return {
//     // will only pregenerate the path in our array, next wont populate any on the fly because fallback is false, 
//     fallback:true,
//     paths: data.map(ele => {
//       return {
//         params: { meetupId: ele._id.toString() }
//       }
//     })
//   }
// }

export async function getServerSideProps(context) {
  const meetupId = context.params.meetupId
  const client = await MongoClient.connect('mongodb://localhost/testdb')
  // getting ahold of the db 
  const db = client.db()
  // getting specific collection 
  const meetupsCollection = db.collection('meetups')
  const data = await meetupsCollection.findOne({_id: new ObjectId(meetupId) })
  client.close()
  console.log(meetupId)
  return {
    props: {
      meetupData: {
        id:data._id.toString()
        ,title: data.title,
        image: data.image,
        address: data.address,
        description: data.description,
      }
    }
  }
}

  
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   const params = context.params;
//   const query = context.query;

//   // Fetch data from an api 
//   return {
//     props: {
//       params, query
//     }
//   };
// }