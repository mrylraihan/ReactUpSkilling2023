import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData()//useLoaderData will automatically do res.json() for us
  if(data.isError){
    return <p>{data.message}</p>
  }
const events = data.events
console.log(events)
  return (
    <>
       <EventsList events={events}/>
    </>
  );
}

export default EventsPage;

export const loader = async () => {
  // can use any js code and doc access like cookies and local storage but no hooks
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    //...
    // return {isError:true, message:'Could not fetch events.'}
    // throw {message :'could not fetch events'}
    // throw new Response(JSON.stringify({message:'Could not fetch events'}), {status:500})
    throw json({ message: 'Could not fetch events' }, {status:500})//method from react-router-dom will convert to json 
  } else {
  
    return response;
  }
}