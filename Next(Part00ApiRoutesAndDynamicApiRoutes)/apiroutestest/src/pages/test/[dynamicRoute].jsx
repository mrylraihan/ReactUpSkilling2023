import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function testQuery() {
    const [data, setData] = useState({})
    // this is a dynamic page testing if the router.query would have any effect on the 
    //dynamic api route, which it doesnt. 
    const router = useRouter()
    const test = router.query.dynamicRoute
    console.log(test)
    console.log(router.query)
    useEffect(()=>{
        fetch('../api/fjdkljfldk')
        .then(res=>res.json())
        .then(result=>{
            setData(result)
            console.log(result)})
        .catch(console.error)
    },[])
  return (
    <div className='app'>
          <h1>testQuery</h1>
          <p>in our pages folder this page is labeled [test]</p>

          <p> data from our page route : {JSON.stringify(router.query)}</p>
          <p> data from our api route : {JSON.stringify(data)}</p>
    </div>
  )
}

export default testQuery