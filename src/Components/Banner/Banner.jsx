import React from 'react'
import './Banner.css'
import NavBar from '../NavBar/NavBar'
import Row from '../Row/Row'
function Banner({scrolled}) {
    return (
        <>
            <div className=' banner-main'>
                <NavBar scrolled={scrolled} />
                <div className="container-fluid  display-shadow">

                <div className="px-5 d-flex justify-content-center  ">
                    <div className='d-flex justify-content-end flex-column col-md-6 col-12  left-area' >

                        <div className="col-6  movie-info">
                            <h1 className='text-white movie-titile'>ALIVE</h1>
                            <p className='movie-discription text-white'>As a grisly virus rampages a city, a lone man stays locked inside his apartment, digitally cut off from seeking help and desperate to find a way out.</p>
                        </div>
                        <div className='btns d-flex'>
                            <button className='playBtn'><span class="fa-solid fa-play"></span>Play</button>
                            <button className='infoBtn'> <span class="material-symbols-outlined">
                                info
                            </span>More Info</button>
                        </div>
                    </div>


                    <div className="col-md-6 "> </div>
                </div>
                
            <Row/>
            </div>

            </div>

        </>

    )
}
export default Banner
