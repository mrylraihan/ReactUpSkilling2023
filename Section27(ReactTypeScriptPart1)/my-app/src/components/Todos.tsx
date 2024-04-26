import React from 'react'

const Todos: React.FC <{children:string, items:string[]}>= (props)=> {
  console.log(props.children)
  console.log(props)

  return (
    <>
    <h1>{props.children}</h1>
    <ul>
        <li>Learn React</li>
        <li>Learn Typescript</li>
    </ul>
    </>
  )
}

export default Todos
// import React from 'react'

// function Todos(props:{todo1: string, todo2:string, children:string}) {
//   console.log(props.children)
//   console.log(props)

//   return (
//     <ul>
//         <li>Learn React</li>
//         <li>Learn Typescript</li>
//     </ul>
//   )
// }

// export default Todos