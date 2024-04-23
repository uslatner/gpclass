
function AccordionItem({ title, children, isActive, onShow, photo }) {
  return (
    <section>
      <h3>{title}</h3>
      <img src={photo} alt="photo" />
      { isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </section>
  )
}

export default AccordionItem