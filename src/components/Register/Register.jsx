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
        className=" mx-auto shadow-lg p-5 pt-3 mt-5 rounded-4"
      >
        <h2 className="text-center mb-4">Register</h2>
        <div className="form-outline mb-3">
          <input
            ref={nameRef}
            type="text"
            id="form1Example11"
            className="input rounded-2"
            placeholder="First name"
          />
          
        </div>
        <div className="form-outline mb-3">
          <input
            ref={lastRef}
            type="text"
            id="form1Example12"
            className="input rounded-2"
            placeholder="Last name"
          />
         
        </div>
        <div className="form-outline mb-3">
          <input
            ref={emailRef}
            type="email"
            id="form1Example1"
            className="input rounded-2"
            placeholder="Email address"
          />
          
        </div>

        <div className="form-outline mb-3">
          <input
            ref={passwordRef}
            type="password"
            id="form1Example2"
            className="input rounded-2"
            placeholder=" Password"
          />
          
        </div>

        <div className="row mb-3">
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

        <button type="submit" className="btn btn-primary btn-block mt-2">
          Sign up
        </button>
      </form>
    </div>
  );
};
