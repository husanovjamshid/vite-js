import { Link } from "react-router-dom";
import "./publics.scss";

export const PublicHeader = () => {
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/login" className="btn btn-outline-primary" href="#">
                Login
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/register" className="btn btn-outline-success" href="#">
                Register
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <a className="text-reset me-3" href="#">
            <i className="fas fa-shopping-cart" />
          </a>
          <div className="dropdown">
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Some news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </nav>
  );
};
