import "./CommentForm.style.css";
import React from "react";
import { withFormik } from "formik";
import Textarea from "../../components/Textarea/Textarea";

const CommentInnerForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Textarea
          className="inputBase"
          name="comment"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.comment}
          error={errors.comment}
          type="textarea"
          label="Yorumunuz: "
        ></Textarea>
        <button className="submitButton" type="submit">
          Gönder
        </button>
      </form>
    </div>
  );
};

const CommentForm = withFormik({
  mapPropsToValues: () => ({
    comment: "",
  }),

  validate: (values) => {
    const errors = {};

    if (!values.comment) {
      errors.comment = "Yorum Boş Bırakılamaz!";
    }
    return errors;
  },

  handleSubmit: (values, action) => {
    setTimeout(() => {
      alert("Yorum Yapıldı");
    }, 1000);
    action.props.comment(values);
  },
})(CommentInnerForm);

export default CommentForm;
