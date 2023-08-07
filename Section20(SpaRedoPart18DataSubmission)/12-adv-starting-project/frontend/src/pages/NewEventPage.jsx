import React from 'react'
import {json, redirect} from 'react-router-dom'
import EventForm from '../components/EventForm'

function NewEventPage() {

  return (
    <>
    <h1>NewEventPage</h1>
    <EventForm/>
    </>
  )
}

export default NewEventPage

export async function action({request, params}){
  const data = await request.formData()
  console.log(data, ' data from NewEventPage action ')
  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  }
  console.log(eventData, 'eventData')
  const response = await fetch('http://localhost:8080/events', {
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(eventData)
  })
  if(!response.ok){
    throw json({ message: 'cant submit' }, {status:500})
  }
  return redirect('/events')

}