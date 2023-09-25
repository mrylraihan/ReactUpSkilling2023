import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetUpPage() {

  function addMeetUpHandler(enteredData){
    console.log(enteredData)
  }
  
  return (
    <div>
      <h1>NewMeetUpPage</h1>
      <button onClick={() => router.push('new-meetup/2/test')}>Go to Meet up</button>
      <NewMeetupForm onAddMeetup={addMeetUpHandler}/>
    </div>
  )
}

export default NewMeetUpPage