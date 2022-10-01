const Modal = (
  { setModal },
  carName,
  pickUpDate,
  dropOffDate,
  pickUpLocation,
  dropOffLocation
) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <h1 className="modal__title">Complete Reservation</h1>
        <button onClick={() => setModal(false)} className="modal__close-button">
          X
        </button>
        <div className="modal__info">
          <h2 className="modal__info-title">
            Upon completing this reservation enquiry, you will receive:
          </h2>
          <p className="modal__info-text">
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        <div className="modal__location-date">
          {/* <div className="modal__location-date-item">
            <h2 className="modal__sub-title">Location & Date</h2>
            <p className="modal__label">Pick-Up Date & Time</p>
            {pickUpDate && (
              <p className="modal__value">{pickUpDate.toString()}</p>
            )}
            <p className="modal__label">Drop-Off Date & Time</p>
            {dropOffDate && (
              <p className="modal__value">{dropOffDate.toString()}</p>
            )}
            <p className="modal__label">Pick-Up Location</p>
            {pickUpLocation && (
              <p className="modal__value">{pickUpLocation.toString()}</p>
            )}
            <p className="modal__label">Drop-Off Location</p>
            {dropOffLocation && (
              <p className="modal__value">{dropOffLocation.toString()}</p>
            )}
          </div> */}
          <div className="modal__car">
            <div className="modal__car-info">
              <p className="modal__label">Car -</p>
              <p className="modal__value">{carName}</p>
            </div>
            <img src="" alt="carImage" className="modal__car-image" />
          </div>
        </div>
        <hr className="modal__hr" />
        <div className="modal__personal-info">
          <h2 className="modal__sub-title">Personal Information</h2>
        </div>
        <button
          onClick={() => setModal(false)}
          className="modal__reserve-button"
        >
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default Modal;