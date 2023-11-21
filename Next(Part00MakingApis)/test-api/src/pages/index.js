import { useRouter } from "next/router"

function index() {
  const router = useRouter()
  const getData = async()=>{
    const res = await fetch('/api/dataTest', { method: "Delete" })
    const response = await res.json()
    console.log(response)
  }
  const getData2 = async()=>{
    const res = await fetch('/api/anotherTest')
    const response = await res.json()
    console.log(response)
  }
  
  return (
    <div className='app'>
      <h1>Index</h1>
      <button onClick={getData}>Get Data</button>
      <button onClick={getData2}>Get Data from another Test Api</button>
      <button onClick={()=>router.push('/home')}>Go to Home</button>
    </div>
  )
}

export default index
