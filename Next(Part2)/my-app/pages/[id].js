import { useRouter } from 'next/router'
import React from 'react'

function single(props) {
  const router = useRouter()
  const id = router.query.id
  console.log(props)
  return (
    <div className='app'>single : {id}</div>
  )
}

export default single




// export const getStaticProps = () => {
  
//   // const id = router.query.id
//   // return fetch('https://jsonplaceholder.typicode.com/posts/'+id)
//   //   .then(res => res.json())
//   //   .then(result => {
//   //     return {
//   //       props: {
//   //         data: result
//   //       }
//   //     }
//   //   })
//   //   .catch(console.error)
// }