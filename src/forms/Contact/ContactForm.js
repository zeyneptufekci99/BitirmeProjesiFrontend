import "./ContactForm.style.css";
import React from "react";
import { withFormik } from "formik";
import Textarea from "../../components/Textarea/Textarea";
import Input from "../../components/Input/Input";
const ContactInnerForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          error={errors.username}
          name="username"
          type="text"
          label="İsim:"
        ></Input>
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          error={errors.username}
          name="username"
          type="text"
          label="Email Adresi:"
        ></Input>
        <Textarea
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          error={errors.username}
          name="username"
          type="text"
          label="Mesaj:"
        ></Textarea>
        <button className="submitButton" type="submit">
          Gönder
        </button>
      </form>
    </div>
  );
};

const ContactForm = withFormik({
  mapPropsToValues: () => ({
    Contact: "",
  }),

  validate: (values) => {
    const errors = {};

    if (!values.Contact) {
      errors.Contact = "Yorum Boş Bırakılamaz!";
    }
    return errors;
  },

  handleSubmit: (values, action) => {
    setTimeout(() => {
      alert("Yorum Yapıldı");
    }, 1000);
    action.props.Contact(values);
  },
})(ContactInnerForm);

export default ContactForm;
