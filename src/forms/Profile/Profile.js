import "./Profile.style.css";

import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { withFormik } from "formik";

const ProfileInnerForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  const [onEditButtonClick, setOnEditButtonClick] = useState(true);
  return (
    <div className="ProfileBase">
      <div className="profileWrapper">
        <h1>Profil</h1>
        <button
          className="editButton"
          onClick={() => setOnEditButtonClick(!onEditButtonClick)}
        >
          {!onEditButtonClick ? "Vazgeç" : "Düzenle"}
        </button>

        <form className="formBase" onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            error={errors.username}
            name="username"
            type="text"
            label="Kullanıcı Adı:"
            isReadOnly={onEditButtonClick}
          ></Input>

          <Input
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={errors.email}
            type="email"
            label="Email Adresiniz: "
            isReadOnly={onEditButtonClick}
          ></Input>
          <Input
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={errors.name}
            type="text"
            label="Adınız: "
            isReadOnly={onEditButtonClick}
          ></Input>
          <Input
            name="surname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.surname}
            error={errors.surname}
            type="text"
            label="Soyadınız: "
            isReadOnly={onEditButtonClick}
          ></Input>
          <Input
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={errors.password}
            type={!onEditButtonClick ? "text" : "password"}
            label="Şifreniz: "
            isReadOnly={onEditButtonClick}
          ></Input>
          <Input
            name="point"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.point}
            error={errors.point}
            type="text"
            label="Puanınız: "
            isReadOnly={true}
          ></Input>
          <button className="submitButton" type="submit">
            Kaydet
          </button>
        </form>
      </div>
    </div>
  );
};

const ProfileForm = withFormik({
  mapPropsToValues: (props) => ({
    name: props.user.name ?? "",
    surname: props.user.surname ?? "",
    email: props.user.email ?? "",
    password: props.user.password ?? "",
    username: props.user.username ?? "",
    point: props.user.point ?? "0",
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
    action.props.values(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
  },
})(ProfileInnerForm);

export default ProfileForm;
