import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function GetFetch() {
    const quote = useSelector(state => state.fetchData)
    // const state = useSelector(state => state)
    const dispatch = useDispatch()


    const getQuote = ()=>{
        fetch('https://api.kanye.rest')
        .then(res=>res.json())
        .then(result=>dispatch({type:'fetch',data:result.quote}))
        .catch(console.error)
    }

  return (
    <div>
          <h3>GetFetch and add to redux slice</h3>
          {quote && <h5>{quote}</h5>}
          <button onClick={getQuote}>Get Data</button>
    </div>
  )
}

export default GetFetch