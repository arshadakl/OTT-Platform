import React, { useEffect, useState } from 'react'
import './Banner.css'
import NavBar from '../NavBar/NavBar'
import Row from '../Row/Row'
import axios from '../../Axios'
import { API_KEY, IMG_BASE } from '../../Constant/constant'



function Banner({ scrolled ,title}) {
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }

        const truncatedText = text.split(' ').slice(0, maxLength).join(' ');
        return `${truncatedText} ...`;
    };


    const [movies, setMovies] = useState()
    const [random, setRandom] = useState(Math.floor(Math.random() * 20))
    // const [bannerMovie,setBannerMovie] = useState([])
    useEffect(() => {

        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            // console.log(response.data.results);
            setMovies(response.data.results[random])
            // console.log(movies);
        })
    }, [random])
    useEffect(() => {
        setInterval(() => {
            setRandom(Math.floor(Math.random() * 20))
        }, 10000);
    }, [])
    const maxLength = 50;



    return (
        <>
            <div className=' banner-main' style={movies ? { backgroundImage: `URL(https://image.tmdb.org/t/p/original${movies.backdrop_path})` } : null}>
                <NavBar genres={28} scrolled={scrolled} />
                <div className="container-fluid  display-shadow">

                    <div className="px-5 d-flex justify-content-center  ">
                        <div className='d-flex justify-content-end flex-column col-md-6 col-12  left-area' >

                            <div className="col-6  movie-info">
                                <h1 className='text-white movie-titile'>{movies ? (movies.title ? movies.title : movies.name) : ""}</h1>
                                <p className='movie-discription text-white'>{movies ? truncateText(movies.overview, maxLength) : null}</p>
                            </div>
                            <div className='btns d-flex'>
                                <button className='playBtn'><span className="fa-solid fa-play"></span>Play</button>
                                <button className='infoBtn'> <span className="material-symbols-outlined">
                                    info
                                </span>More Info</button>
                            </div>
                        </div>


                        <div className="col-md-6 "> </div>
                    </div>

                    <Row title={title} />
                </div>

            </div>

        </>

    )
}
export default Banner
