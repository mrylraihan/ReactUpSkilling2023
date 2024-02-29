export default async function handler(req, res) {
	if (req.method == 'POST') {
		console.log(req.body)
		const reqOptions = {
			method: 'POST',
			body: JSON.stringify({
				title: req.body.title,
				body: req.body.body,
				userId: 1,
			}),
			headers: {
				'Content-type': 'application/json',
			},
		}
		let newBody = await fetch(
			'https://jsonplaceholder.typicode.com/posts',
			reqOptions
		)
		newBody = await newBody.json()
		res.status(200).json(newBody)
		// res.json({message:"POST"})
	}
	let data = await fetch('https://jsonplaceholder.typicode.com/posts')
	data = await data.json()
	res.status(200).json(data)
}
