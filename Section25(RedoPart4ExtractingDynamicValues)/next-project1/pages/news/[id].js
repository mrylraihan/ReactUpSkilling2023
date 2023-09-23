import { useRouter } from 'next/router'
import React from 'react'

function somethingImportant() {
  const router = useRouter()
  const id = router.query.id
  console.log(router.query)
  return (
    <div>something-Important {id}</div>
  )
}

export default somethingImportant