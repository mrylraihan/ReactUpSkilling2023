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
  

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
       {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
       {!isLoading && movies.length=== 0 && !error && <p>No movies Found!</p>}
       {isLoading && <p>Loading...</p>}
       {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
