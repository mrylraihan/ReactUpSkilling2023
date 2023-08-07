import { useRef } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function HomePage() {
  const numRef = useRef()
  const nav = useNavigate()

  const navigateToo = ()=> nav('/number/'+numRef.current.value)

  return (
    <div>
      <h1>My Home Page</h1>
      <p>Got the List <Link to="/products">products</Link></p>
      <p>Got the List <a href="/products">products</a></p>

      <div>
        <label>
          <input type="number" ref={numRef} />
          <button onClick={navigateToo}>submit</button>
        </label>
      </div>
    </div>
  )
}

export default HomePage