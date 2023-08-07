import { useState } from "react"

export default function Joke({ id, text, onDelete, likes, onLike, onDisLike, idx }) {

    const handleLike = () => {
        onLike(idx)
    }

    const handleDislike = () => {
        onDisLike(idx)
    }

    return (
        <div>
            <p>{text}</p>
            <p>Likes: {likes}</p>
            {/* <p>Is Favorite: {favorite ? "Yes" : "No"}</p> */}
            <button onClick={handleLike}>👍</button>
            <button onClick={handleDislike}>👎</button>
            <button onClick={onDelete.bind(this, id)}>delete</button>
        </div>
    )
}