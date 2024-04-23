import CardItem from "./CardItem"

function CardsList({ panels }) {
  return (
    <div>
      {panels.map(panel => 
        <CardItem 
          key={panel.id}
          title={panel.title}
          photo={panel.photo}
        >{panel.content}</CardItem>
      )}
    </div>
  )
}

export default CardsList