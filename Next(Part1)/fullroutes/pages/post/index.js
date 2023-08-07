import React from 'react'
import Card from '../components/Card'
import Link from 'next/link'
import { useRouter } from 'next/router'
function Post({ allPost }) {
    const router = useRouter()
    let content = allPost.map(ele => <Card ele={ele} />)

    return (
        <div>
            <button onClick={router.back}>Go Back</button>
            {content}
        </div>
    )
}

export default Post