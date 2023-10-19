import React from 'react'
import Card from '../../../components/card/Card'

function Blogs({data}) {
    console.log(data)
    let content = data.map((ele)=>{
        return <Card key={ele.id} id={ele.id} title={ele.title} body={ele.body}/>
    })
    return (
        <>
        <div className='app'>
            <h1>All Blogs</h1>
        </div>
        {content}
        </>
    )
}

export default Blogs

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
        props: {
            data:data
        }
    }
}