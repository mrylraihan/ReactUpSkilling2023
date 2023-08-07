import { useState } from "react"

export default function JokeForm({ onAddJoke, setError }) {
    const [text, setText] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.length>5){
            onAddJoke(text)
            setError(false)
            setText("")
        }else{
            setError(true)
            return 
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="text">New Joke</label>
            <input
                type="text"
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Joke</button>
        </form>
    )
}