import Link from 'next/link'
import React from 'react'

function Cards({ele}) {
    return (
        <div className='app'>
            <Link href={`/People/${ele.id}`}><h1>{ele.name}</h1></Link>
        </div>
    )
}

export default Cards