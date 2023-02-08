import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { UserContext } from "../../context/UserContext/UserContext";
import "./privates.scss";

export const PrivateHeader = () => {
  const { user } = useContext(UserContext);
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar py-3 navbar-expand-lg navbar-light bg-secondary">
        <div className="container">
          <Link to="/" className="navbar-brand me-2" href="https://mdbgo.com/">
            <span className="fw-bold text-white">Unews</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav ms-3 mb-2 mb-lg-0"></ul>

            <div className="d-flex align-items-center">
              <Link
                to="/posts"
                type="button"
                className=" text-white text-decoration-none 
               px-3 me-2"
              >
                Posts
              </Link>
              <Link
                to="/users"
                type="button"
                className="text-white text-decoration-none  me-3"
              >
                Users
              </Link>
            </div>
          </div>
          <button
            onClick={() => {
              navigate("/");
              setToken("");
            }}
            className="btn  d-inline-block btn-dark rounded-circle py-2 px-2 "
          >
            {user.firstname.at(0) + "." + user.lastname.at(0)}
          </button>
        </div>
      </nav>
    </>
  );
};
