import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUS.css";
import * as Yup from "yup";
import { Formik } from "formik";
import { Alert } from "@mui/material";

const SignupSchema = Yup.object().shape({
  name: Yup.string().max(70, "Too Long!").required("Required"),
  email: Yup.string().email("Please enter valid email").required("Required"),
  isMessage: Yup.string().min(30, "Too Short!").required("Required"),
});

const ContactUS = () => {
  const [success, setSuccess] = useState(false);

  return (
    <div className="contact-container" id="contact">
      <div className="contact-title">
        <h1 className="title">TAKE A COFFEE & CHAT WITH ME</h1>
      </div>
      <div
        className="contact-main"
        style={{ width: "600px", marginTop: "1.25chrem" }}
      >
        <Formik
          initialValues={{
            name: "",
            email: "",
            isMessage: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values, { resetForm }) => {
            console.log("@@@@@@@@@@@@@@@@@", values);
            const data = {
              from_name: values.name,
              message: `${values.isMessage}  Email:- ${values.email}`,
              reply_to: "nayanbhakhar7075@gmail.com",
            };
            await emailjs
              .send(
                "service_bpbse9j",
                "template_475qphh",
                data,
                "fsKcClqu8ZQoi6-p9"
              )
              .then(
                (result) => {
                  console.log("sucess", result.text);
                  result.text === "OK" ? setSuccess(true) : setSuccess(false);
                  resetForm();
                },
                (error) => {
                  setSuccess(false);
                }
              );
          }}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="app-footer-form">
              <div>
                <label className="label">Name </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              <p className="errorMsg">{errors.name}</p>
              <div>
                <label className="label">Email </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <p className="errorMsg">{errors.email}</p>
              </div>
              <div>
                <label className="label">Message </label>
                <textarea
                  type="text"
                  id="isMessage"
                  name="isMessage"
                  value={values.isMessage}
                  onChange={handleChange}
                />
                <p className="errorMsg">{errors.isMessage}</p>
              </div>
              <div className="app-flex-btn">
                <button type="submit" className="btn-submit">
                  Submit
                </button>
                {success ? (
                  <Alert onClose={() => setSuccess(false)}>
                    Message Sent Successfully.
                  </Alert>
                ) : (
                  ""
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactUS;
