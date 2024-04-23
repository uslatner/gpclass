import { Container } from "react-bootstrap";
import emailMePls from '../assets/emailmepls.svg';
import myPic from '../assets/Zerodays-53.jpg';
import gitLogo from '../assets/githubLogo.svg';
import linkedLogo from '../assets/linkedInLogo.svg'
import oblak01 from '../assets/oblak01.svg';
import FadeIn from "react-fade-in/lib/FadeIn";
import oblak02 from '../assets/oblak02.svg';

function ContactPage() {

  return (
    <Container>
      <img src={oblak01} alt="oblak01" className='oblak01'/>
      <img src={oblak02} alt="oblak02" className='oblak02'/>
      <FadeIn>
      <img src={emailMePls} alt="EmailMePls" />
      <div className="d-flex flex-row justify-content-between align-items-center mt-5">
        <div className="textContact">
          <p className="titleContact">my email</p>
          <h3 className='contentContact'>ursa.slatner@portfoliomail.com</h3>
          <p className="titleContact">my socials</p>
          <div>
            <a href="https://github.com/uslatner" target="_blank" rel="noreferrer">
              <img src={gitLogo} alt="GitHub" className="social-link"/>
            </a>
            <a href="https://linkedin.com/in/ursa-slatner-617279265" target="_blank" rel="noreferrer">
              <img src={linkedLogo} alt="LinkedIn" className="social-link"/>
            </a>
          </div>
        </div>
        <img src={myPic} alt="myPic" className="imgContact" />
      </div>
      </FadeIn>
    </Container>
  )
}

export default ContactPage