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
  let data = props.meetupData
  return (
    <>
      <MeetupDetails image={data.image} title={data.title} description={data.description} address={data.address} id={data.id}/>

    </>
  )
}

export default index

export async function getStaticPaths(context){
  const result = await fetch('http://localhost:3000/api')
const {data} = await result.json();
let paths = data.map(ele=>{
  return {params:{meetupId:ele._id}}
})

  return {
    // will only pregenerate the path in our array, next wont populate any on the fly because fallback is false, 
    fallback:true,
    paths
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId
  console.log(meetupId)
  const result = await fetch('http://localhost:3000/api/'+meetupId)
  let data = await result.json()
  data = {...data, id:data._id}
  return {
    props: {
      meetupData: data
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