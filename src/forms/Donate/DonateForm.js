import "./DonateForm.style.css";
import React from "react";
import { withFormik } from "formik";
import Input from "../../components/Input/Input";
const DonateInnerForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  return (
    <div>
      <form className="donateFormBase" onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.donated}
          error={errors.donated}
          name="donated"
          type="text"
          pattern="[0-9]*"
          isNumber={true}
        ></Input>
        <button className="submitButton" type="submit">
          Gönder
        </button>
      </form>
    </div>
  );
};

const DonateForm = withFormik({
  mapPropsToValues: (props) => ({
    id: props.event.id ?? "",
    name: props.event.name ?? "",
    imageUrl: props.event.imageUrl ?? "",
    explanation: props.event.explanation ?? "",
    director: props.event.director ?? "",
    point: props.event.point ?? "",
    startDate: props.event.startDate ?? "",
    endDate: props.event.endDate ?? "",
    type: props.event.type ?? "",
    quota: props.event.quota ?? "",
    longitude: props.event.longitude ?? "",
    latitude: props.event.latitude ?? "",
    donated: props.event.donated ?? "",
  }),

  validate: (values) => {
    const errors = {};

    if (!values.donated) {
      errors.donated = "Sayı Bırakılamaz!";
    }
    return errors;
  },

  handleSubmit: (values, action) => {
    setTimeout(() => {}, 1000);
    action.props.getValues(values);
  },
})(DonateInnerForm);

export default DonateForm;
