import "../Register/register.scss";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Register = () => {
  let { setToken } = useContext(AuthContext);

  let nameRef = useRef();
  let lastRef = useRef();
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
    nameRef: Yup.string().required("Required firstname!"),
    lastRef: Yup.string().required("Required lastname!"),
    emailRef: Yup.string()
      .required("Required email!")
      .email("Enter emailing correctly!"),
    passwordRef: Yup.string()
      .min(4, "Password should not be less than 4 items!")
      .max(15, "Password should not be more than 15!")
      .required("Required password!"),
  });
  const initialValues = {
    nameRef: "",
    lastRef: "",
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
          <form className="shadow-lg bg-white mx-auto shadow-lg rounded-3 pt-3 mt-4 p-5 pb-3">
            <h2 className="text-center mb-3">Register</h2>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail331" className="form-label">
               Firt name
              </label>
              <Field
                type="text"
                className="form-control"
                id="exampleInputEmail331"
                aria-describedby="emailHelp"
                name="nameRef"
              />
              <span className="text-danger">
                <ErrorMessage name="nameRef" />
              </span>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail431" className="form-label">
                Last name
              </label>
              <Field
                type="text"
                className="form-control"
                id="exampleInputEmail431"
                aria-describedby="emailHelp"
                name="lastRef"
              />
              <span className="text-danger">
                <ErrorMessage name="lastRef" />
              </span>
            </div>
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
