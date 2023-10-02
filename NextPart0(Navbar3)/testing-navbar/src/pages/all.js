import Card from '@/Components/Card'
import React, { useEffect, useState } from 'react'

function all() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(setData)
        .catch(console.error)
    },[])
    console.log(data)
  return (
    <div>
        <h1 className="text-center">All Posts</h1><hr/>
        <div>
        {data.map(ele=><Card key={ele.id} title={ele.title} body={ele.body}/>)}
        </div>
    </div>
  )
}

export default all