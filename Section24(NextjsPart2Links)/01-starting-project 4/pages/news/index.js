//our-domain.com/news
import Link from 'next/link'
import { useRouter } from 'next/router';
function NewsPage() {
   const router = useRouter()
    return (
        <>
        <h1>The News Page</h1>
        <ul>
                <li><Link href={`/news/NextJS`}>NextJS is cool</Link></li>
                <li><Link href={`/news/ReactJS`}>ReactJS is cool</Link></li>
            
        </ul>
            <button onClick={router.back}>go back</button>
        </>
    )
}

export default NewsPage