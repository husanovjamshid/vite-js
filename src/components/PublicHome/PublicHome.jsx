import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserContext";

export const PublicHome = () => {
  const [post, setPost] = useState([]);
  let { user } = useContext(UserContext);
  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((data) => {
      if (data.status === 200) {
        setPost(data.data);
      }
    });
  });
  return (
    <div className="container">
      <h1 className="text-center mb-5 mt-3">Public Home</h1>
      <div className="row g-5 py-5">
        {post.length ? (
          post.map((item) => (
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <div className="">
                <div className="card mx-auto">
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
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="container">
            <h3 className="alert alert-danger">
              There are no posts available at the moment. You can add a post
              from the "Posts" section!!!
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};
