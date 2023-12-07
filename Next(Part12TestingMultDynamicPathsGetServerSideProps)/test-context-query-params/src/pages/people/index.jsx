import { useRouter } from 'next/router'
import React from 'react'

function People({people}) {
    const router = useRouter()
    console.log(people)
    const navigateToDetails = id =>router.push('people/'+id)
  return (
    <div className='app'>
          <h1>People</h1>
          {people.map(ele=>{
              return <div className='app' key={ele.name}><h3>{ele.name}</h3>
                  <button onClick={navigateToDetails.bind(this, ele.id)}>See more</button>
              </div>
          })}
    </div>
  )
}

export default People