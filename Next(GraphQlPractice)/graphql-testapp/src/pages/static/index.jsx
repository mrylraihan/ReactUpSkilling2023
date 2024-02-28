import React from 'react'

function index(props) {
    console.log(props.data.data.allFilms.films)
    
    let content = props.data.data.allFilms.films.map(film=>{
        return (
					<div key={film.id}className='mx-auto mt-12 w-80 p-4 bg-white shadow-lg rounded-lg text-center'>
						<h1 className='text-center'>{film.title}</h1>
						{/* Other content */}
					</div>
				)
    })
	return <>{content}</>
}

export default index

export async function getStaticProps() {
    const query = `query Query {
  allFilms {
    films {
      id
      episodeID
      director
      title
    }
  }
}`
    const url = 'https://swapi-graphql.netlify.app/.netlify/functions/index'
    const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query }),
		}
	const res = await fetch(url, requestOptions)
    const data =  await res.json();
	return {
		props: {data:data},
	}
}
