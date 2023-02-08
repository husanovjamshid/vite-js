import { useRef, useState } from "react";
import "./modal.scss";
import axios from "axios";

export const Modal = ({ modal, setModal, children, modalTitle }) => {
  const handleClose = (evt) => {
    if (evt.target.matches(".overlay")) {
      setModal(false);
    }
  };



  return (
    <>
      {modal ? (
        <div onClick={handleClose} className="overlay">
          <div className="modals p-4 bg-white shadow-lg w-50 rounded-3">
            <button
              onClick={() => setModal(false)}
              className="btn btn-primary close__btn"
            >
              Close
            </button>
            <h3>{modalTitle}</h3>
            {children}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
