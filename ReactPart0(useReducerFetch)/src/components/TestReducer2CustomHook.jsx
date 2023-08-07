import React from 'react'
import useReducerFetch from '../hooks/use-reducerfetch'

function TestReducer2CustomHook() {
    const tool = useReducerFetch()
    
    // now inorder to get this to work properly you would run your fetch call then on the response you would add your dispatch 

    console.log(tool)

    return (
        <div className='app'>
            <h4>TestReducer2 CustomHook</h4>
            {tool.state.quote && <p>{tool.state.quote}</p>}
            <button onClick={tool.getQuote}>Get Quote</button>
            <button onClick={tool.getPost}>Get Post</button>
            {tool.state.post && <p>{tool.state.post.title}</p>}
        </div>
    )
}

export default TestReducer2CustomHook