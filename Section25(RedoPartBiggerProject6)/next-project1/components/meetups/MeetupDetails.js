import React from 'react'

function MeetupDetails(props) {
  return (
      <>
          <img src={props.image} alt={props.title} />
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <address>{props.address}</address>
      </>
  )
}

export default MeetupDetails