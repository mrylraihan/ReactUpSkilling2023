import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <h1>My Home Page</h1>
      <p>Got the List <Link to="/products">products</Link></p>
      <p>Got the List <a href="/products">products</a></p>
    </div>
  )
}

export default HomePage