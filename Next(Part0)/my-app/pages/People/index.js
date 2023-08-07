import React from 'react'
import Cards from './_cards'
import Link from 'next/link'

function people(props) {
  return (
    <>
    <div className='app'>
        <h1>People</h1>
        <Link href={'/People/create'}> <p>Make a person</p></Link>
    </div>
    {props.people.map(ele=><Cards ele={ele}/>)}
    </>
  )
}

export default people