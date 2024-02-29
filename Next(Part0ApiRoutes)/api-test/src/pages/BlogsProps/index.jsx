import { useRouter } from 'next/router'


function index(props) {
	const router = useRouter()
	
	console.log(props)
  const navToDetails = (id)=>router.push(`/BlogsProps/${id}`)

	return (
		<div>
			{props.result.map((ele) => {
				return (
					<div className='mx-auto mt-12 w-80 p-4 bg-white shadow-lg rounded-lg text-center' key={ele.id}>
						<h1 className='text-center'>{ele.title}</h1>
						<button
							className='rounded-md p-2 bg-blue-500 text-white hover:bg-blue-200 px-6'
							onClick={navToDetails.bind(this, ele.id)}>
							See Details
						</button>
					</div>
				)
			})}
		</div>
	)
}

export default index

export const getStaticProps = async () => {
	const data = await fetch('http://localhost:3000/api/blog')
	const result = await data.json()
	return {
		props: {
			result,
		},
	}
}
