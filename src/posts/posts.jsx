import { useContext, useEffect, useRef, useState } from "react";
import { Modal } from "../components/Modal/Modal";
import "./posts.scss";
import axios from "axios";
import { UserContext } from "../context/UserContext/UserContext";
import { useNavigate } from "react-router-dom";
export const Posts = () => {
  // const modalTitle = "Edit post";
  let [modal, setModal] = useState(false);
  let [editModal, setEditModal] = useState(false);
  let [card, setCard] = useState([]);
  let [edit, setEdit] = useState([]);
  let [editId, setEditId] = useState();
  let { user } = useContext(UserContext);

  /////////////////////////////////////////////////
  let category = useRef();
  let title = useRef();
  let text = useRef();
  let time = useRef();
  let author = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("http://localhost:5000/posts", {
        category: category.current.value,
        title: title.current.value,
        text: text.current.value,
        time: time.current.value,
        author: author.current.value,
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

  const renderCard = () => {
    axios
      .get("http://localhost:5000/posts")
      .then((data) => {
        if (data.status === 200) {
          setCard(data.data);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    renderCard();
  }, []);

  const handleDelete = (cardId) => {
    axios
      .delete(`http://localhost:5000/posts/${cardId}`)
      .then((data) => {
        if (data.status === 200) {
          setCard(data.data);
          renderCard();
        }
      })
      .catch((err) => console.log(err));
  };

  // const article = {};
  const handleEditSubmit = (evt) => {
    evt.preventDefault();

    axios
      .put(`http://localhost:5000/posts/${editId}`, {
        category: category.current.value,
        title: title.current.value,
        text: text.current.value,
        time: time.current.value,
        author: author.current.value,
      })
      .then((data) => {
        if (data.status === 200) {
          setEditModal(false);
          renderCard();
        }
      })
      .catch((err) => console.log(err));
  };
  const handleEdit = (cardId) => {
    setEditModal(true);
    setEditId(cardId);
  };

  localStorage.setItem("card", JSON.stringify(card));

  return (
    <div className="container ">
      <h2 className="text-center py-3 mb-1">Posts</h2>
      <button
        onClick={() => setModal(true)}
        className="btn btn-warning mx-auto d-block text-white d-flex align-items-center"
      >
        Add post <i class="fa-solid fa-plus ms-2"></i>{" "}
      </button>
      <div className="row g-5 py-5">
        {card.length
          ? card.map((item) => (
              <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <div className="">
                  <div className="card shadow mx-auto">
                    <div className="card__body">
                      <span className="tag tag-blue mb-2">{item.category}</span>
                      <h4>{item.title}</h4>
                      <i className="card__desc">"{item.text}</i>
                    </div>
                    <div className="card__footer">
                      <div className="user mt-2">
                        <p className="card__icons">
                          {user.firstname.at(0) + "." + user.lastname.at(0)}
                        </p>
                        <div className="user__info ms-2">
                          <h5 className="m-0">{item.author}</h5>
                          <small>{item.time}</small>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center container">
                      <i
                        onClick={() => handleEdit(item.id)}
                        class="fa-solid fa-pen-to-square text-warning "
                      ></i>
                      <i
                        onClick={() => handleDelete(item.id)}
                        class="fa-solid fa-trash text-danger ms-4 mb-4"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>

      {modal ? (
        <Modal modal={modal} setModal={setModal} modalTitle={"Add post"}>
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
            <input
              required
              ref={author}
              className="form-control mb-3"
              type="text"
              placeholder="Add Author"
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
        </Modal>
      ) : (
        ""
      )}

      {editModal ? (
        <Modal modal={editModal} setModal={setEditModal} modalTitle={"Edit post"}>
          <form onSubmit={handleEditSubmit} className="py-4">
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
            <input
              required
              ref={author}
              className="form-control mb-3"
              type="text"
              placeholder="Add Author"
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
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};
