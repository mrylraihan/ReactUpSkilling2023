import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading , setIsLoading] = useState(false);
  const [error, setError] = useState(null)



  const fetchMoviesHandler = async () =>{
    setIsLoading(true)
    setError(null)
    try{
      // const response  = await fetch('https://swapi.py4e.com/api/film/') if your checking the errors
      const response  = await fetch('https://swapi.py4e.com/api/films/')
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const data = await response.json()
      
      const newData = data.results.map(ele=>{
        return {
          id: ele.episode_id,
          title: ele.title,
          releaseDate: ele.release_date,
          openingText: ele.opening_crawl
        }
      })
      setMovies(newData)
      setIsLoading(false)
    }catch(error){
      setError(error.message)
    }
    setIsLoading(false)
    }
  let content = <p>Found no Movies!</p>

  if(movies.length > 0){
    content = <MoviesList movies={movies}/>
  }

  if(error){
    content = <p>{error}</p>
  }

  if(isLoading){
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
          {content}
      </section>
    </React.Fragment>
  );
}

export default App;
