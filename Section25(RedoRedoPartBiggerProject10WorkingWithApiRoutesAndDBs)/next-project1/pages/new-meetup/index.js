import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetUpPage() {
  const router = useRouter()
  
  async function addMeetUpHandler(enteredData) {
    const response = await fetch('../api/new-meetup')
    const result = await response.json()
    console.log(result)
  }

  return (
    <div>
      <h1>NewMeetUpPage</h1>
      <button onClick={() => router.push('anything')}>Go to Meet up</button>
      <button onClick={() => router.push('test/test')}>Go to test</button>
      <button onClick={() => router.back()}>Go back</button>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </div>
  )
}

export default NewMeetUpPage