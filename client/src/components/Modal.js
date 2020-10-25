import React from "react";
import "../styles/Modal.css";

const Modal = ({
  title,
  description,
  onButtonOneClick,
  buttonOneLabel,
  buttonTwoLabel,
  onButtonTwoClick,
  onCloseAction,
  children,
}) => {
  const renderButtonContainer = () => {
    return (
      <div className="modal-button-container">
        {onButtonOneClick && <button className="modal-button" onClick={onButtonOneClick}>{buttonOneLabel}</button>}
        {onButtonTwoClick && <button className="modal-button" onClick={onButtonTwoClick}>{buttonTwoLabel}</button>}
      </div>
    );
  };
  return (
    <div className="modal-container" onClick={onCloseAction}>
      <div className="modal-content">
        <div className="modal-header-container">
  <h1 className="modal-title">{title}</h1>
        </div>
        <hr style={{ width: "80%" }} />
        <div className="modal-main-content">{children || description}</div>
        {onButtonOneClick || onButtonTwoClick ? renderButtonContainer() : null}
      </div>
    </div>
  );
};

export default Modal;
