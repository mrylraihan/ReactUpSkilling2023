import Link from 'next/link'
import React from 'react'

function Navbar(props) {
    return (
        <>
            <div className='app'>
                <h3>Navbar</h3>
                <ul>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/blogs'><li>blogs</li></Link>
                </ul>
            </div>
            <div>
                {props.children}
            </div>
        </>
    )
}

export default Navbar