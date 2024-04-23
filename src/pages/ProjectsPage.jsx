import CardsList from '../components/features/card/CardsList'
import Container from "react-bootstrap/Container";
import stuffIMade from '../assets/stuffimade.svg';
import image1 from '../assets/mockup08a.jpg';
import image2 from '../assets/mockup09c.jpg';
import image3 from '../assets/mockup09a.jpg';
import { useState } from 'react';
import oblak01 from '../assets/oblak01.svg';
import FadeIn from 'react-fade-in/lib/FadeIn';
import oblak02 from '../assets/oblak02.svg';

function ProjectsPage() {

  const [panels, setPanels] = useState([
    { id: 1, title: "Project 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae metus tincidunt, sit amet ultricies velit vestibulum. Fusce consequat sem at nisi gravida, non aliquet enim pulvinar. Phasellus ac nisi vestibulum, placerat odio eget, sagittis urna.", photo: image1 },
    { id: 2, title: "Project 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae metus tincidunt, sit amet ultricies velit vestibulum.", photo: image2 },
    { id: 3, title: "Project 3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae metus tincidunt, sit amet ultricies velit vestibulum. Fusce consequat sem at nisi gravida, non aliquet enim pulvinar. Phasellus ac nisi vestibulum, placerat odio eget, sagittis urna.", photo: image3 },
  ]);

  return (
    <Container>
      <img src={oblak01} alt="oblak01" className='oblak01'/>
      <img src={oblak02} alt="oblak02" className='oblak02'/>
      <FadeIn>
      <img src={stuffIMade} alt="StuffIMade" />
      <CardsList 
        panels={panels}
      />
      </FadeIn>
    </Container>
  )
}

export default ProjectsPage