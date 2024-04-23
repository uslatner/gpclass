import { Container } from "react-bootstrap";

function CardItem( { title, children, photo}) {
  return (
    <Container>
      <div className="d-flex flex-row justify-content-between align-items-center mt-5">
        <img src={photo} alt="photo" className="imgProjects"/>
        <div className="textProject">
          <h3 className="nameProject">{title}</h3>
          <p>{children}</p>
        </div>
      </div>
    </Container>
  )
}

export default CardItem