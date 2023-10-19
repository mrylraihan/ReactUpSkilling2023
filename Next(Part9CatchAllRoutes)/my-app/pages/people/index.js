import React from 'react'
import Cards from '../../components/cards/Cards'
import Link from 'next/link'

function people(props) {
  console.log(props)
  console.log(props.data)
  return (
    <>
    <div className='app'>
        <h1>People</h1>
        <Link href={'/People/create'}> <p>Make a person</p></Link>
    </div>
    {props.people.map((ele,idx)=><Cards key={idx} ele={ele}/>)}
    </>
  )
}

export default people

export const getStaticProps = () => {
  return {
    props: {
      data: 'test in index'
    }
  }
}