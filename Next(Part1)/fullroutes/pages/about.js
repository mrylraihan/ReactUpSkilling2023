import { useRouter } from 'next/router'
import React from 'react'

function About() {
    const router = useRouter()
    return (
        <div className='app'>
            <button onClick={router.back}>Go back</button>
            <h1>About</h1>
        </div>
    )
}

export default About