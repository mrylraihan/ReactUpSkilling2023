import MeetupDetails from '@/components/meetups/MeetupDetails'
import { useRouter } from 'next/router'
import React from 'react'

function index(props) {
  const router = useRouter()
  let meetupId = router.query.meetupId
  console.log(meetupId)
  console.log(props, ":Props")
  console.log(router.query, ":Router")
  console.log(props.meetupData)
  return (
    <>
      <MeetupDetails image={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153"} title={'A First meet up'} description={'the meet up description'} address={"some address and zip"} />

    </>
  )
}

export default index

export async function getStaticPaths(context){
  return {
    // will only pregenerate the path in our array, next wont populate any on the fly because fallback is false, 
    fallback:false,
    paths:[
      { params: { meetupId:"m1"}},
      { params: { meetupId:"m2"}},
      { params: { meetupId:"m3"}},
    ]
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId
  console.log(meetupId)
  return {
    props: {
      meetupData: {
        image: { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153"}, title:  'A First meet up', description:  'the meet up description', address:  "some address and", Id:meetupId}
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