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