import { useState } from "react"
import AccordionItem from "./AccordionItem"

function AccordionList({ panels }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleShow(id){
    console.log(`Showing Accordion Panel ${id}`);
    setActiveIndex(id);
  }

  return (
    <div>
      {panels.map(panel => 
        <AccordionItem 
          key={panel.id}
          title={panel.title}
          photo={panel.photo}
          isActive={activeIndex === panel.id}
          onShow={() => handleShow(panel.id)} 
        >{panel.content}</AccordionItem>
      )}
    </div>
  )
}

export default AccordionList