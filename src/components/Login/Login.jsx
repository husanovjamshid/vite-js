import { useContext, useEffect, useRef, useState } from "react";
import "../Register/register.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";

export const Login = () => {
  let [user1, setUser1] = useState([]);

  const navigate = useNavigate();
  let { setToken } = useContext(AuthContext);
  let emailRef = useRef();
  let passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`http://localhost:5000/login`, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((data) => {
        if (data.status === 201) {
          setToken(data.data.accessToken);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="w-50 mx-auto shadow-lg p-5 pt-4 mt-5 rounded-4"
      >
        <h2 className="text-center mb-4">Login</h2>
        <div className="form-outline mb-4">
          <input
            ref={emailRef}
            type="email"
            id="form1Example1"
            className="form-control"
          />
          <label className="form-label" htmlFor="form1Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            ref={passwordRef}
            type="password"
            id="form1Example2"
            className="form-control"
          />
          <label className="form-label" htmlFor="form1Example2">
            Password
          </label>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="form1Example3"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="form1Example3">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>
          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign in
        </button>
      </form>
    </div>
  );
};
