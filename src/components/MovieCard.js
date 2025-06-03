import React from 'react'
import { IMG_CDN_UEL } from '../utils/constant'


const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40 pr-4'>
      <img alt="Movies Card"
      src={IMG_CDN_UEL + posterPath}
      />
    </div>
  )
}

export default MovieCard
