import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi'
// Free download of graphics library (two of PNGs in assets): https://illustrationz.design/
import notFound from '../assets/errorOne.png';
import dule1 from '../assets/dule1.jpg';
import dule2 from '../assets/dule2.jpg';
import dule3 from '../assets/dule3.jpg';

const NotFound = () => {
  return (
    <div className="notFoundWrapper">
      <Container>
      <div className="image-wrapper d-flex">
            <img src={dule1} alt="Image 1" className="image image-container" />
            <img src={dule2} alt="Image 2" className="image image-container" />
            <img src={dule3} alt="Image 2" className="image image-container" />
      </div>
      <h3 className='contentContact mt-5'>yey you found cats :)</h3>
      <p>now go back</p>
      </Container>
    </div>
  )
}

export default NotFound