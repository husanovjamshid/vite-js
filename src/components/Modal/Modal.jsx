import { useRef, useState } from "react";
import "./modal.scss";
import axios from "axios";

export const Modal = ({ modal, setModal, renderCard }) => {
  let category = useRef();
  let title = useRef();
  let text = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("http://localhost:5000/posts", {
        category: category.current.value,
        title: title.current.value,
        text: text.current.value,
      })
      .then((data) => {
        if (data.status === 201) {
          setModal(false);
          renderCard();
        }
      })
      .catch((err) => console.log(err));
    console.log({});
  };

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
            <h3>Modal Title</h3>

            <form onSubmit={handleSubmit} className="py-4">
              <select ref={category} className="form-control mb-3">
                <option>Choose Category</option>
                <option>Technology</option>
              </select>
              <input
                ref={title}
                className="form-control mb-3"
                type="text"
                placeholder="Add Title"
              />
              <textarea
                ref={text}
                className="form-control"
                placeholder="Add text"
                rows="6"
              ></textarea>
              <button className="btn btn-primary d-block block  mt-3">
                Send
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
