import "./SignUp.style.css";

import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import React from "react";
import { withFormik } from "formik";

const SignUpInnerForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  return (
    <div className="signinBase">
      <div className="signinWrapper">
        <h1>Üye Ol</h1>
        <form className="formBase" onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            error={errors.username}
            name="username"
            type="text"
            label="Kullanıcı Adı:"
          ></Input>

          <Input
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={errors.email}
            type="email"
            label="Email Adresiniz: "
          ></Input>
          <Input
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={errors.name}
            type="text"
            label="Adınız: "
          ></Input>
          <Input
            name="surname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.surname}
            error={errors.surname}
            type="text"
            label="Soyadınız: "
          ></Input>
          <Input
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={errors.password}
            type="password"
            label="Şifreniz: "
          ></Input>
          <button className="submitButton" type="submit">
            Üye Ol
          </button>
        </form>
        <Link className="goToSignIn" to={"/sign-in"}>
          Hesabınız var mı ? Giriş Yap.
        </Link>
      </div>
    </div>
  );
};

const SignUpForm = withFormik({
  mapPropsToValues: () => ({
    name: "",
    surname: "",
    email: "",
    password: "",
    username: "",
  }),

  validate: (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "İsim giriniz!";
    }
    if (!values.surname) {
      errors.surname = "Soyad giriniz!";
    }
    if (!values.email) {
      errors.email = "Email giriniz!";
    }
    if (!values.password) {
      errors.password = "Şifre giriniz!";
    }
    if (!values.username) {
      errors.username = "Kullanıcı Adı giriniz!";
    }

    return errors;
  },

  handleSubmit: (values, action) => {
    setTimeout(() => {
      alert("Üye olma başarılı");
      action.props.isSignedUp(values);
    }, 1000);
  },
})(SignUpInnerForm);

export default SignUpForm;
