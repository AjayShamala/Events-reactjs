import './index.css'
const EventItem = props => {
  const {eventItems, onClickImageStatus, isActive} = props
  const {id, imageUrl, name, location} = eventItems
  const activeImage = isActive ? 'image border' : 'image'
  const onClickStatus = () => {
    onClickImageStatus(id)
  }
  return (
    <li className="container">
      <div>
        <button className="button-container">
          <img
            src={imageUrl}
            onClick={onClickStatus}
            alt="event"
            className={activeImage}
          />

          <p className="main-heading">{name}</p>
          <p className="para">{location}</p>
        </button>
      </div>
    </li>
  )
}
export default EventItem
