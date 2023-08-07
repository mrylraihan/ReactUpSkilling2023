import { useReducer } from 'react'
import './App.css'
import Joke from './components/Joke'
import JokeForm from './components/JokeForm'
import { useState } from 'react'

const initial = [
  {
    id: 1,
    text: "I'm afraid for the calendar. Its days are numbered.",
    likes: 0
  },
  {
    id: 2,
    text: "I used to be addicted to soap, but I'm clean now.",
    likes: 0
  }
]

const jokeReducer = (state, action)=>{
    if(action.type =='add'){
      return [...state, action.joke]
    }else if(action.type == 'delete'){
      return state.filter(ele => ele.id != action.id)
    } else if (action.type == 'like'){
      ++state[action.idx].likes
      return [...state] 
    } else if (action.type == 'disLike'){
      --state[action.idx].likes
      return [...state] 
    } else if (action.type == 'sort') {
      return [...state].sort((a, b) => b.likes - a.likes)
    }else{
      return state
    }
}
function App() {
  const [jokes, dispatch] = useReducer(jokeReducer, initial)

  const handleAddJoke = (text) => {
    const joke = {
      text,
      // id:self.crypto.randomUUID()
      id:jokes.length+1,
      likes:0
    }
    dispatch({type:'add',joke})
    // console.log("New Joke:", text)
  }

  const handleDeleteJoke = (id)=>{
    console.log(id)
    dispatch({type:'delete', id})
  }
  const handleLike = (idx)=>{
    dispatch({type:'like', idx})
  }
  const handleDisLike = (idx)=>{
    dispatch({ type: 'disLike', idx })
  }

  const handleSort = () =>{
    dispatch({type:'sort'})
  }

  console.log(jokes)

  return (
    <div className="">
      <h1>Dad Jokes</h1>
      <button onClick={handleSort}>Sort</button>
      <JokeForm onAddJoke={handleAddJoke} />

      {jokes.map((joke,idx) => (
        <Joke key={joke.id} onDelete={handleDeleteJoke} {...joke} idx={idx} onLike={handleLike} onDisLike={handleDisLike}/>
      ))}


    </div>
  )
}

export default App