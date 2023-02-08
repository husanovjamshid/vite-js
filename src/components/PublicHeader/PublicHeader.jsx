import { Link } from "react-router-dom";
import "./publics.scss";

export const PublicHeader = () => {
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <div className="d-flex align-items-center">
              <Link
                to="/login"
                type="button"
                className="btn btn-primary
               px-3 me-2"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                type="button"
                className="btn btn-primary me-3"
              >
                Sign up
              </Link>
              <a
                className="btn btn-dark px-3"
                href="https://github.com/husanovjamshid"
                role="button"
              >
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
