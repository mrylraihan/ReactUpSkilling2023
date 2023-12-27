import { useRouter } from "next/router"

function Home() {
    const router = useRouter()
    const getData = async () => {
        const res = await fetch('/api/dataTest', { method: "GET" })
        const data = await res.json()
        console.log(data)

    }
    return (
        <div className='app'>
            <h1>Home</h1>
            <button onClick={getData}>Get data</button>
            <button onClick={router.back}>Go back</button>
        </div>
    )
}

export default Home
