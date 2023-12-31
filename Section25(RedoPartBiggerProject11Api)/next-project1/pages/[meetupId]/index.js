import MeetupDetails from '@/components/meetups/MeetupDetails'
import { useRouter } from 'next/router'
import React from 'react'


function index(props) {
  const router = useRouter()
  let meetupId = router.query.meetupId
  console.log(router)
  console.log(router.route)
  console.log(meetupId, 'from query')
  console.log(props, 'from params')
  return (
    <>
      <MeetupDetails image={props.meetupData
.image} title={props.meetupData
.title} description={props.meetupData
.description} address={props.meetupData
.address} id={props.meetupData
.id} />

    </>
  )
}

export default index

export const getStaticPaths = async () => {
 return{
  fallback: true,//contains all supported paths
  // fallback: true,//doesnt contains all supported paths
  paths:[
    {params:{meetupId:'m1'}},
    {params:{meetupId:'m2'}},
    {params:{meetupId:'m3'}},
  ]
 }
}

// we would use getStaticProps over getServerSideProps because we know this 
// data isn't going to change so we can pre-populate the pages in our build 
//process

export async function getStaticProps(context){
  // fetch data for a single meetup
  const meetupId = context.params.meetupId
  console.log(meetupId)
  return {
    props: {
      meetupData: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153",
        title: 'A First meet up',
        description: 'the meet up description',
        address: "some address and zip", 
        id: meetupId
      }
    }
  }
}

// we would use getServerSideProps when we know data is going to be changing 
// consistently but if we know the data wont change we can pre-populate the
//pages in our build process with getStaticProps
/* export async function getServerSideProps(context){
    and use context to get access to the params object and or the query object
  //fetch data from server side
  return {
    props: {}
  }
}
*/
// export async function getServerSideProps(context){
//   const {params} = context
//   // const req = context.req
//   // const res = context.res
//   console.log(context)
//   return{
//     props:{
//       param:params,
//       query: context.query
//       // res:res,
//       // req:req
//     }
//   }
// }