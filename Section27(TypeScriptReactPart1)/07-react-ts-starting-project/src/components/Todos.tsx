import React from 'react'
import Item from './Item'
import Todo from '../models/todo'

const Todos:React.FC<{items:Todo[], children?:string}>=(props)=> {
    console.log(props)
  return (
    <div>
        <h1>Todos Page:</h1>
        <ul>
            {props.items.map((item:Todo)=><Item key={item.id} item={item}/>)}
        </ul>
    </div>
  )
}

export default Todos

// function Todos(props:{items:string[], children?:string}) {
//   return (
//     <div>
//         <h1>Todos Page:</h1>
//         <ul>
//             {props.items}
//         </ul>
//     </div>
//   )
// }

// export default Todos