import './index.css'
const eventItemList = {
  yetToRegister: 'YET_TO_REGISTER',
  registerd: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}
const ActiveEventRegistrationDetails = props => {
  const {actives} = props
  const renderNoItems = () => (
    <div className="contain">
      <p className="pass">
        Click on an event, to view its registration details
      </p>
    </div>
  )
  const renderedYettoregistered = () => (
    <div className="conts">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="image-1"
      />
      <p className="par">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this art
        beautiful form.
      </p>
      <button className="button-containerss">Register Here</button>
    </div>
  )
  const renderedToregistered = () => (
    <div className="cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="image-2"
      />
      <h1 className="parss">You have already registered for the event</h1>
    </div>
  )
  const renderRegisteredClosed = () => (
    <div className="conss">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="image-1"
      />
      <h1 className="header">Registrations Are Closed Now!</h1>
      <p className="parss">Stay tuned. We will reopen</p>
    </div>
  )
  const exportImagesList = () => {
    switch (actives) {
      case eventItemList.yetToRegister:
        return renderedYettoregistered()
      case eventItemList.registerd:
        return renderedToregistered()
      case eventItemList.registrationsClosed:
        return renderRegisteredClosed()
      default:
        return renderNoItems()
    }
  }
  return <div className="festival-container">{exportImagesList()}</div>
}
export default ActiveEventRegistrationDetails
