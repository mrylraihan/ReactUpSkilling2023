import React from 'react'

function Todos(props:any) {
  console.log(props)
  return (
    <div>
        <h1>Todos</h1>
        <ul>
            <li>Learn React</li>
            <li>Learn Typescript</li>
        </ul>
    </div>
  )
}

export default Todos