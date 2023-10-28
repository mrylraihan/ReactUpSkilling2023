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
      <MeetupDetails image={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153"} title={'A First meet up'} description={'the meet up description'} address={"some address and zip"} id={meetupId}/>
     
    </>
  )
}

export default index

export async function getServerSideProps(context){
  const {params} = context
  // const req = context.req
  // const res = context.res
  console.log(context)
  return{
    props:{
      param:params,
      query: context.query
      // res:res,
      // req:req
    }
  }
}