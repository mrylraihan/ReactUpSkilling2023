import React from 'react'
import './Test2.css'
function Test2() {
    const facts = [
        { title: 'Javascript', fact: 'fhjkdshfjkshdjkfhfkjs' },
        { title: 'Javascript', fact: 'fhjkdshfjkshdjkfhfkjs, fhjkdshfjkshdjkfhfkjs' },
        { title: 'Javascript', fact: 'fhjkdshfjkshdjkfhfkjs, fhjkdshfjkshdjkfhfkjs, fhjkdshfjkshdjkfhfkjs' },
    ]
  return (
    <div>
          <h1 className='header'>Test2</h1>
          <div className='card'>
            {facts.map((ele,idx)=><div key={idx}>
                <h4>{ele.title}</h4>
                <p>{ele.fact}</p>
            </div>)}
          </div>
    </div>
  )
}

export default Test2