import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=> store.movies)
  return (
    <div className=' w-screen bg-black pl-20'>
      <div className='-mt-52 relative z-30'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>

      </div>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>

      <MovieList title={"Popular"} movies={movies.popularMovies}/>

      <MovieList title={"Up Coming Movies"} movies={movies.upComingMovies}/>

      

    </div>
  )
}

export default SecondaryContainer
