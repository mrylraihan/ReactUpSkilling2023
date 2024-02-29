import React from 'react'

function index(props) {
  console.log(props)
	return (
		<div className='text-center pt-6'>
			<h1 className='text-3xl '>Welcome Home {props.name}</h1>
		</div>
	)
}

export default index


export const getStaticProps=async()=>{
  const res = await fetch('http://localhost:3000/api/hello')
  const result = await res.json()
  return {
    props:
      result
  }
}