import './App.css'
import Joke from './components/Joke'
import JokeForm from './components/JokeForm'
import { useState } from 'react'
function App() {
  const [jokes, setJokes] =useState([
    {
      id: 1,
      text: "I'm afraid for the calendar. Its days are numbered.",
      likes:0
    },
    {
      id: 2,
      text: "I used to be addicted to soap, but I'm clean now.",
      likes:0
    }
  ])

  const handleAddJoke = (text) => {
    const joke = {
      text,
      // id:self.crypto.randomUUID()
      id:jokes.length+1,
      likes:0
    }
    setJokes(prev=>[...prev,joke])
    console.log("New Joke:", text)
  }

  const handleDeleteJoke = (id)=>{
    console.log(id)
    setJokes(prev=>{
      return prev.filter(ele=>ele.id != id)
    })
  }
  const handleLike = (idx)=>{
    setJokes(prev=>{
      ++prev[idx].likes
      return [...prev]
    })
  }
  const handleDisLike = (idx)=>{
    setJokes(prev => {
      --prev[idx].likes
      return [...prev]
    })
  }

  const handleSort = () =>{
    // setJokes(prev=>{
    //   prev.sort((a,b)=>b.likes-a.likes)
    //   return [...prev]
    // })
    // setJokes(prev=>[...prev.sort((a,b)=>b.likes-a.likes)])
    setJokes(prev=>[...prev].sort((a,b)=>b.likes-a.likes))
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