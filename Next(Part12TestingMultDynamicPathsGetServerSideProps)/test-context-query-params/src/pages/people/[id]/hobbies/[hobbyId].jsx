import { useRouter } from 'next/router'
import React from 'react'

function singleHobby(props) {
  const router = useRouter()
  const { id, hobbyId } = router.query
  console.log(router.query, 'query')
  console.log(props.people[id].hobbies[hobbyId].hobby)
  return (
    <div className='app'>
      <h1>singleHobby</h1>
      <h2>{props.people[id].hobbies[hobbyId].hobby}</h2>
      <button onClick={router.back}>Go back</button>
    </div>
  )
}

export default singleHobby

export const getServerSideProps = async ({ query, params }) => {
  return {
    props: {
      query, params
    }
  }
}