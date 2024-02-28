import axios from 'axios'
import React, { useEffect } from 'react'

function effects(props) {
    console.log(props, 'props')
    // console.log(props.data.data)
    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/posts')
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.data)
        .then(console.log)
    },[])
  return (
    <div>
      {props.species.map((ele, idx)=>{
        console.log(ele)
        return (
					<div
						key={idx}
						className='mx-auto mt-12 w-80 p-4 bg-white shadow-lg rounded-lg text-center'>
						{
							<h1 className='text-center'>
								{ele.homeworld ? `Planet : ${ele.homeworld.name}` : 'No Home World'}
							</h1>
						}
{/* 
						{ele.homeworld && (
							<h1 className='text-center'>{ele.homeworld.name}</h1>
						)}
						{!ele.homeworld && <h1 className='text-center'>No Home World</h1>}
						Other content */}
					</div>
				)
      })}
    </div>
  )
}

export default effects

export  const getStaticProps = async()=>{
    const query = `query Query {
  allSpecies {
    species {
      homeworld {
        name
        id
        terrains
      }
    }
  }
}
`
const url = 'https://swapi-graphql.netlify.app/.netlify/functions/index'
// const requestMethod = {
//     url:url,
//     method: "POST",
//     data:{query}
    
// } 

//     const result = await axios(requestMethod)
const result = await axios.post(url, {query})
    const species = await result.data.data.allSpecies.species
    return {
			props: { species },
		}
}