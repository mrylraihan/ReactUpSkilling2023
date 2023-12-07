import { useRouter } from 'next/router'
import React from 'react'

function hobbiesIndex(props) {
  const router = useRouter()
  console.log(router.query)

  console.log(props, 'props')
  return (
    <div className='app'>hobbiesIndex</div>
  )
}

export default hobbiesIndex

export const getServerSideProps = async () => {
  let query = context.query
  let params = context.params
  return {
    props: {
      query:context?.query,
      params:context?.params
    }
  }

}