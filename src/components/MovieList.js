import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(movies)
  return (
    <div className='max-w-screen pr-10'>
        <h1 className='text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar '>
            
            <div className='flex'>
                {movies?.map((movie)=><MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
                
            
            </div>
        </div>
      
    </div>
  )
}

export default MovieList
