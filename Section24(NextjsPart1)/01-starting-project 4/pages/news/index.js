//our-domain.com/news
import Link from 'next/link'
function NewsPage(props) {
   
    return (
        <>
        <h1>The News Page</h1>
        {props.arr.map(ele=>{
            return <Link href={`news/${ele}`}><li>{ele}</li></Link>
        })}
        </>
    )
}

export default NewsPage