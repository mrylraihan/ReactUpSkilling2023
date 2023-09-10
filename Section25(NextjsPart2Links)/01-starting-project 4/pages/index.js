//our-domain.com
import Link from 'next/link'
function Homepage(props) {
  return (
    <>
    <ul>
      Navbar
      <li><Link href={'/'}>Home</Link></li>
      <li><Link href={'/news'}>News</Link></li>
    </ul>
    <h1>The Homepage {props.name}</h1>
    </>
  )
}

export default Homepage