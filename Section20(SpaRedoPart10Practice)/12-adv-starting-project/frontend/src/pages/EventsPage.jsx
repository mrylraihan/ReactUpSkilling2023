import React from 'react'
import { Link } from 'react-router-dom'
const DUMMY_EVENT = [
    {id:'e1', title:'Some Event'},
    {id:'e2', title:'Another Event'},
]
function EventsPage() {
  return (
    <>
    <h1>EventsPage</h1>
    <ul>
        {DUMMY_EVENT.map(ele=><li key={ele.id}><Link to={`${ele.id}`}>{ele.title}</Link></li>)}
    </ul>
    </>
  )
}

export default EventsPage