import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetUpPage() {
  const router = useRouter()
  
  async function addMeetUpHandler(enteredData) {
    console.log(enteredData)
    const res = await fetch('../api/new-meetup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
      body:JSON.stringify(enteredData)
		})
    const data = await res.json()
    console.log(data)


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