import "./SignIn.style.css";

import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import React from "react";
import { withFormik } from "formik";

const SignInInnerForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

  return (
    <div className="signinBase">
      <div className="signinWrapper">
        <h1>Üye Girişi</h1>
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
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={errors.password}
            type="password"
            label="Şifreniz: "
          ></Input>
          <button className="submitButton" type="submit">
            Giriş Yap
          </button>
        </form>
        <Link className="goToSignUp" to={"/sign-up"}>
          Hesabınız yok mu ? Hesap Oluştur.
        </Link>
      </div>
    </div>
  );
};

const SignInForm = withFormik({
  mapPropsToValues: () => ({
    password: "",
    username: "",
  }),

  validate: (values) => {
    const errors = {};

    if (!values.password) {
      errors.password = "Şifre giriniz!";
    }
    if (!values.username) {
      errors.username = "Kullanıcı Adı giriniz!";
    }

    return errors;
  },

  handleSubmit: (values, action) => {
    if (values.username != "" && values.password != "") {
      setTimeout(() => {
        alert("Giriş Başarılı");
      }, 1000);

      action.props.getValues(values);
    } else {
      setTimeout(() => {
        alert("Giriş Başarısız");
      }, 1000);
    }
  },
})(SignInInnerForm);

export default SignInForm;
