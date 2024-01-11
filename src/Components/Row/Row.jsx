import React,{useEffect,useState} from 'react'
import './Row.css'
import axios from '../../Axios'
import { API_KEY, BasrUrl, IMG_BASE } from '../../Constant/constant'
IMG_BASE

function Row({genres,title}) {

  const [movie,setMovies] = useState([])
  useEffect(() => {
    axios.get(`discover/movie?api_key=${API_KEY}&with_genres=${genres}`).then((response)=>{
      // console.log(response.data.results);
      setMovies(response.data.results)
      console.log(movie);
    })
  }, [])
  
  return (
    <div className='row pt-5'>
      <h4>{title}</h4>

        <div className='posters '>

        {movie.map((item,)=>{
          return(
            <img key={item.id} className='poster' src={`${IMG_BASE}w400${item.poster_path}`} alt="" />
            // <div style={{backgroundImage: `URL(${IMG_BASE}w400${item.backdrop_path})` }} className=' poster-div d-flex'>
            //   <div className='inner d-flex'>
                
            //     <h6 className='d-flex align-items-end py-3 px-4'>{item.title}</h6>

            //     </div>
            // </div>

          )
        })}
          
        </div>
          <div className='side-shadow '> </div>

    </div>
  )
}

export default Row
