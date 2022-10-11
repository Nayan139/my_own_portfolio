import React from "react";
import "./ContactUS.css";
import * as Yup from "yup";
import { ErrorMessage, Field, useFormik } from "formik";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  isMessage: Yup.string().required("Required"),
});

const ContactUS = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      isMessage: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="contact-container" id="contact">
      <div className="contact-title">
        <h1 className="title">TAKE A COFFEE & CHAT WITH ME</h1>
      </div>
      <div
        className="contact-main"
        style={{ width: "600px", marginTop: "1.25chrem" }}
      >
        <form onSubmit={formik.handleSubmit} className="app-footer-form">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Your Name *"
            />
          </div>
          <div className="app-flex">
            <input
              type="text"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Your Email *"
            />
          </div>
          <div className="app-flex">
            <textarea type="text" />
          </div>
          <div className="app-flex-btn">
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUS;
