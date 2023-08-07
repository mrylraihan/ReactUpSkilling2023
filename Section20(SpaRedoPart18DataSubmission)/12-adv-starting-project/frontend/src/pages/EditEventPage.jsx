import React from 'react'
import EventForm from '../components/EventForm'
import {  useRouteLoaderData } from 'react-router-dom'
function EditEventPage() {
  const data = useRouteLoaderData('event-detail')
  
  return (
    <>
    <h1>EditEventPage</h1>
    <EventForm event={data.event}/>
    </>
  )
}

export default EditEventPage