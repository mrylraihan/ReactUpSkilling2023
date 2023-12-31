import React from 'react'
import {  useLoaderData, json} from 'react-router-dom'
import EventItem from '../components/EventItem.js'
function EventDetailPage() {
    // const params = useParams()
    // const id = params.id
const data = useLoaderData()
  return (
    <EventItem event={data.event}/>
  )
}

export default EventDetailPage

export async function loader({request,params}){
  const id = params.id
  console.log(params, ' : params')
  const response = await fetch('http://localhost:8080/events/'+id)
  if(!response.ok){
    throw json({ message: 'Could not find events' }, { status: 500 })
  }else{
    return response 
  }
}