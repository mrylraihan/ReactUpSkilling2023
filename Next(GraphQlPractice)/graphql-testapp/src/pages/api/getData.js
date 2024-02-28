// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getData(req, res) {
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
	res.status(200).json({data, message:"we are live!"})
}
