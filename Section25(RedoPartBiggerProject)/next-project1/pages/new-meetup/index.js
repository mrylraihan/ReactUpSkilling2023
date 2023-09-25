import { useRouter } from 'next/router'
import React from 'react'

function newMeetUp() {
  const router = useRouter()
  return (
    <div>
      <h1>newMeetUp</h1>
      <button onClick={() => router.push('new-meetup/2/test')}>Go to Meet up</button>
    </div>
  )
}

export default newMeetUp