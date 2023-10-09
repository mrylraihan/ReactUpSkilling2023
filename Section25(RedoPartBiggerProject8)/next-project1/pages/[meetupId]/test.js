import { useRouter } from 'next/router'
import React from 'react'

function test(props) {
  const router = useRouter()
  let meetupId = router.query.meetupId
  console.log(meetupId)
  console.log(props)
  return (
    <>
      <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1280px-Cat_August_2010-4.jpg"} style={{ width: 600 }} alt={'cat'} />
      <div>index : {meetupId}</div>
    </>
  )
}

export default test