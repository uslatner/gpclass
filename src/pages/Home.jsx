import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import line from '../assets/Line 1.svg';
import kazalo from '../assets/kazalo.svg';
import image1 from '../assets/mockup08a.jpg';
import image2 from '../assets/mockup09c.jpg';
import image3 from '../assets/mockup09a.jpg';
import aiLogo from '../assets/ai_appicon_64_grayscale.svg';
import psLogo from '../assets/ps_appicon_64_grayscale.svg';
import myPic from '../assets/Zerodays-53.jpg';
import oblak01 from '../assets/oblak01.svg';
import FadeIn from 'react-fade-in/lib/FadeIn';
import oblak02 from '../assets/oblak02.svg';


const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollPosition = window.scrollY;

      // Check if the scroll position is beyond a certain threshold
      if (scrollPosition > 100) {
        // If so, set isScrolled to true to trigger fade-in animation
        setIsScrolled(true);
      } else {
        // Otherwise, set isScrolled to false
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Only run this effect on mount

  useEffect(() => {
    // Set isLoaded to true immediately to trigger load fade-in animation
    setIsLoaded(true);
  }, []);

  return (
    <Container>
      <div>
        <div id="hero-section" className={`fade-in ${isLoaded ? 'loaded' : ''}`}>
          <img src={oblak01} alt="oblak01" className='oblak01'/>
          <img src={oblak02} alt="oblak02" className='oblak02'/>
          <FadeIn>
          <h1>Hey<img src={line} alt="line" className="icon"></img><span>my name's Ursa</span></h1>
          <p>I'm Ursa, a newbie web whiz and design enthusiast chilling out in Melbourne. <br/>Glad you stopped by my digital hangout!</p>
          <hr />
          </FadeIn>
          <div className={`image-wrapper ${isScrolled ? 'fade-in' : ''}`}>
            <div className="image-container">
              <img src={image1} alt="Image 1" className="image" />
              <div className='project-text-container'>
                <p className="image-text">Project 1</p> 
                <p className='image-text'>
                  <img src={aiLogo} alt="aiLogo" className="svg" />
                  <img src={psLogo} alt="psLogo" className="svg" />
                </p>
              </div>
            </div>
            <div className="image-container">
              <img src={image2} alt="Image 2" className="image" />
              <div className='project-text-container'>
                <p className="image-text">Project 2</p> 
                <p className='image-text'>
                  <img src={aiLogo} alt="aiLogo" className="svg" />
                  <img src={psLogo} alt="psLogo" className="svg" />
                </p>
              </div>
            </div>
            <div className="image-container">
              <img src={image3} alt="Image 3" className="image" />
              <div className='project-text-container'>
                <p className="image-text">Project 3</p> 
                <p className='image-text'>
                  <img src={aiLogo} alt="aiLogo" className="svg" />
                  <img src={psLogo} alt="psLogo" className="svg" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="more-info">
          <div className='title-more-info'>
            <h3>Check Out My Stuff?</h3>
            <Link to="/projects" className="btn">Yeah let's go!</Link>
          </div>
          <p>Kick back and browse through my stash of projects. I've got web goodies and design gems waiting to be explored. Whether it's coding up snazzy sites or doodling funky graphics, each piece is a labor of love.</p>
        </div>
        <div id="more-info">
          <div className='d-flex flex-row justify-content-between align-items-center'>
            <div>
              <h3 className='title-more-info'>More About Me</h3>
              <p>I'm all about mixing techie skills with a dash of creative magic. Started off digging design, ended up falling for the web development scene. From slick websites to funky logos, I love bringing ideas to life with a bit of flair.</p>
              <div id="more-info">
                <div className='title-more-info'>
                  <h3>Wanna Like Email And Stuff?</h3>
                  <Link to="/contact" className="btn">Hit me up!</Link>
                </div>
                <p>Got a project brewing? Or just wanna chat about all things web and design? Shoot me a message! I'm always down for a good brainstorm or a virtual high-five. Let's cook up something awesome together!</p>
              </div>
            </div>
            <img src={myPic} alt="picOfMe" className="myPic" />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home;