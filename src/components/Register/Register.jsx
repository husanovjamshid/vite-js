import { useContext, useEffect, useRef, useState } from "react";
import "./register.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { UserContext } from "../../context/UserContext/UserContext";

export const Register = () => {
  let { setToken } = useContext(AuthContext);
  let { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  let nameRef = useRef();
  let lastRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`http://localhost:5000/register`, {
        firstname: nameRef.current.value,
        lastname: lastRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((data) => {
        if (data.status === 201) {
          setToken(data.data.accessToken);
          setUser((data.data.user));
          
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="w-50 mx-auto shadow-lg p-5 pt-2 mt-3 rounded-4"
      >
        <h2 className="text-center mb-4">Register</h2>
        <div className="form-outline mb-2">
          <input
            ref={nameRef}
            type="text"
            id="form1Example11"
            className="form-control"
          />
          <label className="form-label" htmlFor="form1Example11">
            First name
          </label>
        </div>
        <div className="form-outline mb-2">
          <input
            ref={lastRef}
            type="text"
            id="form1Example12"
            className="form-control"
          />
          <label className="form-label" htmlFor="form1Example12">
            Last name
          </label>
        </div>
        <div className="form-outline mb-2">
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

        <div className="form-outline mb-2">
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

        <div className="row mb-2">
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
          Sign up
        </button>
      </form>
    </div>
  );
};
