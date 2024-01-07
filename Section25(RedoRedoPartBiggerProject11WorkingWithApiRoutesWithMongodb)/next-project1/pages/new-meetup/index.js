import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetUpPage() {
  const router = useRouter()
  
  function addMeetUpHandler(enteredData) {
    // console.log(enteredData)
    fetch('../api/new-meetup', {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(enteredData)
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
      router.push('/')
    })
    .catch(console.error)

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