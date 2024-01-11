import { useState,useEffect } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import Row from './Components/Row/Row'
import Footer from './Components/Footer/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [banner,setBanner] = useState({})

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
   
     <Banner title={"Popular on Netflix"} scrolled={scrolled}/>
     <div className='row-areas'>
     <Row title={"Romance"} genres={10749}/>
     <Row title={"Horror"} genres={27}/>
     </div>
     <Footer/>
    </>
  )
}

export default App
