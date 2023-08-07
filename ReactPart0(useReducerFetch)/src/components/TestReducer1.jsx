import React, { useReducer } from 'react'

const initial = { quote: '1', post: {} }

const fetchReducer = (state, action) => {
    if (action.type == 'kanye') {
        return { ...state, quote: action.quote }
    } if(action.type == 'post'){
        return { ...state, post: action.post }
    }else {
        return initial
    }
}
function TestReducer1() {
    const [state, dispatch] = useReducer(fetchReducer, initial)
    
    // now inorder to get this to work properly you would run your fetch call then on the response you would add your dispatch 

    console.log(state)

    const getQuote = () => {
        fetch('https://api.kanye.rest')
            .then(res => res.json())
            .then(result => result.quote)
            .then(quote=>{
                // console.log(quote)
                return quote
            })
            .then(quote => dispatch({ type: 'kanye', quote: quote }))
            .catch(console.error)
    }

    const getPost = async () =>{
        const num = Math.floor(Math.random() * 100);
        try{
            let res = await fetch('https://jsonplaceholder.typicode.com/posts/'+num)
            let post = await res.json()
            dispatch({type:'post', post:post})

        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className='app'>
            <h4>TestReducer1</h4>
            {state.quote && <p>{state.quote}</p>}
            <button onClick={getQuote}>Get Quote</button>
            <button onClick={getPost}>Get Post</button>
            {state.post && <p>{state.post.title}</p>}
        </div>
    )
}

export default TestReducer1