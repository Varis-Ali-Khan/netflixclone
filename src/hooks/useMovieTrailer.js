import { useEffect,  } from 'react'
import { API_MOVIES_VIDEO } from '../utils/constant'
import { useDispatch,  } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice'

const useMoviesTrailer = (movieId)=>
{
    const dispatch =useDispatch()
   


    const getMovieVideos = async ()=>
    {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_MOVIES_VIDEO)
        const json = await data.json();
        
    
        const trailerData = json.results.filter((video) =>video.type ==="Trailer")
        const trailer = trailerData.length? trailerData[0]: json.results[0]
        
       
        dispatch(addTrailerVideo(trailer))
    }
    
    useEffect(()=>
    {
        getMovieVideos()
    },[])
}

export default useMoviesTrailer