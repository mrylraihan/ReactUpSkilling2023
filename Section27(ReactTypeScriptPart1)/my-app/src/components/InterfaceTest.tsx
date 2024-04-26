import React, { useEffect } from 'react'

interface People {
	name: string
	age: number
}

const InterfaceTest: React.FC<People> = (props) => {
	const testingGraphQL = async () => {
		const query = `query Query {
  allPeople {
    people {
      name
      gender
    }
  }
}`
		const url = 'https://swapi-graphql.netlify.app/.netlify/functions/index'
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query }),
		}
		let data = await fetch(url, requestOptions)
		data = await data.json()
		// console.log(data)
		console.log({ data, message: 'we are live!' })
	}
    useEffect
	(()=>{
        testingGraphQL()
    },[])
	console.log(props)
	return (
		<div>
			<h1>InterfaceTest</h1>
			<p>{props.name}</p>
			<p>{props.age}</p>
		</div>
	)
}
// function InterfaceTest(props:People) {
//     console.log(props)
//   return (
//     <div>
//         <h1>InterfaceTest</h1>
//         <p>{props.name}</p>
//         <p>{props.age}</p>
//     </div>
//   )
// }

export default InterfaceTest
