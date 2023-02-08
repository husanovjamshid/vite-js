import { useRef, useState } from "react";
import "./modal.scss";
import axios from "axios";

export const EditModal = ({ EditModal, setEditModal, renderCard }) => {
  let category = useRef();
  let title = useRef();
  let text = useRef();
  let time = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("http://localhost:5000/posts", {
        category: category.current.value,
        title: title.current.value,
        text: text.current.value,
        time: time.current.value,
      })
      .then((data) => {
        if (data.status === 201) {
          setEditModal(false);
          renderCard();
        }
      })
      .catch((err) => console.log(err));
    console.log({});
  };

  const handleClose = (evt) => {
    if (evt.target.matches(".overlay")) {
      setEditModal(false);
    }
  };

  return (
    <>
      {EditModal ? (
        <div onClick={handleClose} className="overlay">
          <div className="modals p-4 bg-white shadow-lg w-50 rounded-3">
            <button
              onClick={() => setEditModal(false)}
              className="btn btn-primary close__btn"
            >
              Close
            </button>
            <h3>Modal Title</h3>

            <form onSubmit={handleSubmit} className="py-4">
              <select required ref={category} className="form-control mb-3">
                <option>Choose Category</option>
                <option>Technology</option>
                <option>Future</option>
                <option>World</option>
                <option>Literature</option>
                <option>Sport</option>
                <option>Avto</option>
              </select>
              <input
                required
                ref={time}
                className="form-control mb-3"
                type="date"
                placeholder="Add Date"
              />
              <input
                required
                ref={title}
                className="form-control mb-3"
                type="text"
                placeholder="Add Title"
              />
              <textarea
                required
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
