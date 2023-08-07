import React from 'react'
import {  json, redirect, useRouteLoaderData} from 'react-router-dom'
import EventItem from '../components/EventItem.js'
function EventDetailPage() {
    // const params = useParams()
    // const id = params.id
  const data = useRouteLoaderData('event-detail')
  console.log(data, " :from EventDetailPage")
  console.log(data.event, " :event from EventDetailPage")
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

export async function action ({request, params}){
  const id = params.id
  const response = await fetch('http://localhost:8080/events/'+id, {
    method: request.method
  })
  if (!response.ok) {
    throw json({ message: 'Could not delete event' }, { status: 500 })
  } else {
    return redirect('/events')
  }
}