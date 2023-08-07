import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const fetchMoviesHandler = () =>{
    fetch('https://swapi.py4e.com/api/films/')
    .then(res=>res.json())
    .then(data=>data.results)
    .then(data=> {
      const newData = data.map(ele=>{
        return {
          id: ele.episode_id,
          title: ele.title,
          releaseDate: ele.release_date,
          openingText: ele.opening_crawl
        }
      })
      setMovies(newData)})
    .catch(console.error)
  } 

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
