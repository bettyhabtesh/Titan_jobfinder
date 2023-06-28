/** @format */

import { Fragment } from "react";
import ReactDOM from "react-dom";

const BACKDROP_STYLES = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100vh",
  zIndex: "20",
  backgroundColor: "rgba(0, 0, 0, 0.75)",
};

const MODAL_STYLES = {
  position: "fixed",
  top: "40%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "40%",
  backgroundColor: "#f5f5f5",
  padding: "1rem",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
  zIndex: "30",
};

const Backdrop = (props) => {
  return <div style={BACKDROP_STYLES} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div style={MODAL_STYLES}>
      <div>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  const portalElement = document.getElementById("portal");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
