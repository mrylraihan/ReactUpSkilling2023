import { useRouter } from 'next/router'
import React from 'react'

function Home(props) {
  const router = useRouter()
  console.log(props)
  console.log(router.query)
  return (
    <div className='app'>
      <h1>Home</h1>
      <button onClick={()=>router.push('/people')}>Go to People Page</button>
    </div>
  )
}

export default Home
export const getServerSideProps = async ()=>{
  // let query = context.query
  // let params = context.params
  return{
    props:{
      // query:context?.query,
      // params:context?.params
    }
  }

}