import Link from "next/link";

export default function Home() {
  
  return (
    <div className="app">
      <h1>Main</h1>
     <ul>
          <li><Link href={'/post'}>Post</Link></li>
          <li><Link href={'/about'}>About</Link></li>
          <li><Link href={'/more'}>More</Link></li>
      </ul>
     
    </div>
  )
}
