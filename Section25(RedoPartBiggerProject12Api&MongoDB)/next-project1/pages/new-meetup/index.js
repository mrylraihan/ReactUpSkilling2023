import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetUpPage() {
  const router = useRouter()
  
  async function addMeetUpHandler(enteredData) {
    const response = await fetch('/api/new-meetup', {
      method:"POST",
      body: JSON.stringify(enteredData),
      headers:{
        "Content-Type": "application/json"
      },
    })
    const data = await response.json()
    console.log(data)
    // console.log(enteredData)
    router.push('/')
  }
  
  async function getMeetUpDataTest() {
    const response = await fetch('/api/new-meetup', {method:"GET"})
    const data = await response.json()
    console.log(data)
    // console.log(enteredData)
  }

  return (
    <div>
      <h1>NewMeetUpPage</h1>
      <button onClick={() => router.push('anything')}>Go to Meet up</button>
      <button onClick={() => router.push('test/test')}>Go to test</button>
      <button onClick={() => router.back()}>Go back</button>
      <button onClick={() => getMeetUpDataTest()}>Get all</button>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </div>
  )
}

export default NewMeetUpPage