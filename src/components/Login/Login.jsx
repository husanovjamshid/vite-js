import "../Register/register.scss";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Login = () => {
  let { setToken } = useContext(AuthContext);

  let emailRef = useRef();
  let passwordRef = useRef();
  let navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post(`http://localhost:8080/register`, {
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

  const validateSchema = Yup.object({
    emailRef: Yup.string()
      .required("Required email!")
      .email("Enter emailing correctly!"),
    passwordRef: Yup.string()
      .min(4, "Password should not be less than 4 items!")
      .max(15, "Password should not be more than 15!")
      .required("Required password!"),
  });
  const initialValues = {
    emailRef: "",
    passwordRef: "",
  };
  return (
    <div
      id="intro"
      className="bg-image"
      style={{
        backgroundImage:
          "url(https://mdbootstrap.com/img/new/fluid/city/018.jpg)",
        height: "100vh",
      }}
    >
      <div className="container">
        <Formik
          validationSchema={validateSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <form className="shadow-lg bg-white mx-auto shadow-lg rounded-3 pt-3 mt-5 p-5">
            <h2 className="text-center mb-3">Login</h2>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <Field
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="emailRef"
              />
              <span className="text-danger">
                <ErrorMessage name="emailRef" />
              </span>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail31" className="form-label">
                Password
              </label>
              <Field
                type="email"
                className="form-control"
                id="exampleInputEmail31"
                aria-describedby="emailHelp"
                name="passwordRef"
              />
              <span className="text-danger">
                <ErrorMessage name="passwordRef" />
              </span>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Formik>
      </div>

      {/* <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }} /> */}
    </div>
  );
};
