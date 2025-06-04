import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggetion from './GptMoviesSuggetion'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
      
    <div className='absolute -z-10'>
<img src={BG_URL}
alt="logo"/>
    </div>
      <GptSearchBar/>
      <GptMoviesSuggetion/>
    </div>
  )
}

export default GptSearch
