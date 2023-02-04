import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { UserContext } from "../../context/UserContext/UserContext";
import "./privates.scss";

export const PrivateHeader = () => {
  const { user } = useContext(UserContext);
  const { setToken } = useContext(AuthContext);
  return (
    <nav className="navbar pubHeader navbar-expand-lg navbar-light py-3">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="navbar-brand mt-2 mt-lg-0" to="/">
            <p className="h2 m-0 text-white">Logo</p>
          </Link>
          <ul className="navbar-nav ms-3 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/posts" className="nav-link text-white">
                Posts
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/users" className="nav-link text-white">
                Users
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <a className="text-reset me-3" href="#">
            <i className="fas fa-shopping-cart" />
          </a>

          <button
            onClick={() => setToken("")}
            className="btn btn-danger rounded-circle py-2 px-2 ms-4"
          >
            {user.firstname.at(0) + "." + user.lastname.at(0)}
          </button>
        </div>
      </div>
    </nav>
  );
};
