import React from 'react'

function Navbar(props) {
  return (
    <>
    <div className='nav'>
        <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
        </ul>
    </div>
    {props.children}
    </>
  )
}

export default Navbar