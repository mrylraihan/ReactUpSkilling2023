import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
const events = useLoaderData()
console.log(events)
  return (
    <>
       {/* <EventsList/> */}
       <EventsList events={events}/>
    </>
  );
}

export default EventsPage;

export const eventsLoader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    //...
  } else {
    const resData = await response.json();
    return resData.events
  }
}