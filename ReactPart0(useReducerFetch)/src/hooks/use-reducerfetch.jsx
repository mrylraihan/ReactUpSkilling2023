import React, { useReducer } from 'react'

const initial = { quote: '1', post: {} }

const fetchReducer = (state, action) => {
    if (action.type == 'kanye') {
        return { ...state, quote: action.quote }
    } if (action.type == 'post') {
        return { ...state, post: action.post }
    } else {
        return initial
    }
}

function useReducerFetch() {
    const [state, dispatch] = useReducer(fetchReducer, initial)
    

    const getQuote = () => {
        fetch('https://api.kanye.rest')
            .then(res => res.json())
            .then(result => result.quote)
            .then(quote => {
                console.log(quote)
                return quote
            })
            .then(quote => dispatch({ type: 'kanye',quote }))
            .catch(console.error)
    }

    const getPost = async () => {
        const num = Math.floor(Math.random() * 100);
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts/' + num)
            let post = await res.json()
            dispatch({ type: 'post', post })

        } catch (error) {
            console.log(error)
        }
    }

    return {state, getQuote, getPost}
}

export default useReducerFetch