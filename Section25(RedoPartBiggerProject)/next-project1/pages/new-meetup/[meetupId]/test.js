import { useRouter } from 'next/router'
import React from 'react'

function index() {
    const router = useRouter()
    let meetupId = router.query.meetupId//you can access the dynamic value in the url in the nested pages 
    console.log(meetupId)
  return (
    <div>test : {meetupId}</div>
  )
}

export default index