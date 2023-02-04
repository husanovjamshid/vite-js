import { useContext, useEffect, useState } from "react";
import { Modal } from "../components/Modal/Modal";
import "./posts.scss";
import axios from "axios";
import { UserContext } from "../context/UserContext/UserContext";
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

  return (
    <div className="container ">
      <h2 className="text-center py-3 mb-1">Posts</h2>
      <button
        onClick={() => setModal(true)}
        className="btn btn-warning mx-auto d-block"
      >
        Add post{" "}
      </button>
      <div className="row g-5 py-5">
        {card.length
          ? card.map((item) => (
              <div className="col-md-4">
                <div className="container">
                  <div className="card">
                    <div className="card__body">
                      <span className="tag tag-blue">{item.category}</span>
                      <h4>{item.title}</h4>
                      <p className="card__desc">{item.text}</p>
                    </div>
                    <div className="card__footer">
                      <div className="user">
                        <button className="btn btn-primary users rounded-circle px-3">
                          {user.firstname.at(0) + "." + user.lastname.at(0)}
                        </button>
                        <div className="user__info">
                          <h5>{user.firstname + " " + user.lastname}</h5>
                          <small>2h ago</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>

      <Modal modal={modal} setModal={setModal} renderCard={renderCard}/>
    </div>
  );
};
