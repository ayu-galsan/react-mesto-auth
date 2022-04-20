function InfoRegisterPopup({isOpen, onClose, islogged, title, error}) {
return (
  <div className={`popup ${isOpen && "popup_opened"}`}>
    <div className="popup__container">
      <button
        className="popup__close"
        onClick={onClose}
        type="button"
      ></button>
      <img className={islogged ? "popup__register-image" : "popup__register-image_error"} />
      <h2 className="popup__register-heading">{islogged ? title : error}</h2>
  </div>
    </div>
)
}

export default InfoRegisterPopup;