import { useContext, useEffect, useRef, useState } from "react";
import { Modal } from "../components/Modal/Modal";
import "./posts.scss";
import axios from "axios";
import { UserContext } from "../context/UserContext/UserContext";
import { useNavigate } from "react-router-dom";
export const Posts = () => {
  let [modal, setModal] = useState(false);
  let [card, setCard] = useState([]);
  let { user } = useContext(UserContext);

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

  const handleEdit = (cardId) => {
    setModal(true)
    axios
      .put(`http://localhost:5000/posts/${cardId}`)
      .then((data) => {
        if (data.status === 200) {
          
          renderCard();
        }
      })
      .catch((err) => console.log(err));
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
              <div className="col-md-4">
                <div className="container">
                  <div className="card">
                    <div className="card__body">
                      <span className="tag tag-blue mb-2">{item.category}</span>
                      <h4>{item.title}</h4>
                      <p className="card__desc">{item.text}</p>
                    </div>
                    <div className="card__footer">
                      <div className="user">
                        <p className="card__icons">
                          {user.firstname.at(0) + "." + user.lastname.at(0)}
                        </p>
                        <div className="user__info ms-2">
                          <h5 className="m-0">
                            {user.firstname + " " + user.lastname}
                          </h5>
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

      <Modal modal={modal} setModal={setModal} renderCard={renderCard} />
    </div>
  );
};
