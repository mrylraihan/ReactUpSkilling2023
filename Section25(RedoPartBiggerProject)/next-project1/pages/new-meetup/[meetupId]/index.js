import { useRouter } from 'next/router'
import React from 'react'

function index() {
    const router = useRouter()
    let meetupId = router.query.meetupId
    console.log(meetupId)
  return (
    <div>index : {meetupId}</div>
  )
}

export default index