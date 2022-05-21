import "./CreateEvent.style.css";

import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import React from "react";
import { withFormik } from "formik";

const CreateEventInnerForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  return (
    <div className="signinBase">
      <div className="signinWrapper">
        <h1>Etkinlik Oluştur</h1>
        <form className="formBase" onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={errors.name}
            name="name"
            type="text"
            label="Film Adı:"
          ></Input>
          <Input
            name="imageUrl"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.imageUrl}
            error={errors.imageUrl}
            type="text"
            label="Film Resim Adresi : "
          ></Input>
          <Input
            name="explanation"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.explanation}
            error={errors.explanation}
            type="text"
            label="Özet: "
          ></Input>
          <Input
            name="director"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.director}
            error={errors.director}
            type="text"
            label="Yönetmen: "
          ></Input>
          <Input
            name="point"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.point}
            error={errors.point}
            type="text"
            label="Puan: "
          ></Input>
          <Input
            name="startDate"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.startDate}
            error={errors.startDate}
            type="text"
            label="Başlangıc Tarihi: "
          ></Input>
          <Input
            name="endDate"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.endDate}
            error={errors.endDate}
            type="text"
            label="Bitiş Tarihi: "
          ></Input>
          <Input
            name="type"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.type}
            error={errors.type}
            type="text"
            label="Etkinlik Türü: "
          ></Input>
          <Input
            name="quota"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.quota}
            error={errors.quota}
            type="text"
            label="Kontenjan: "
          ></Input>
          <Input
            name="longitude"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.longitude}
            error={errors.longitude}
            type="text"
            label="Konum(Boylam): "
          ></Input>
          <Input
            name="latitude"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.latitude}
            error={errors.latitude}
            type="text"
            label="Konum(Enlem): "
          ></Input>
          <button className="submitButton" type="submit">
            Oluştur
          </button>
        </form>
      </div>
    </div>
  );
};

const CreateEventForm = withFormik({
  mapPropsToValues: () => ({
    name: "",
    imageUrl: "",
    explanation: "",
    director: "",
    point: "",
    startDate: "",
    endDate: "",
    type: "",
    quota: "",
    longitude: "",
    latitude: "",
  }),

  validate: (values) => {
    const errors = {};

    if (!values.name) {
      errors.password = "Bu alan boş bırakılamaz!";
    }
    if (!values.imageUrl) {
      errors.username = "Bu alan boş bırakılamaz!";
    }
    if (!values.explanation) {
      errors.password = "Bu alan boş bırakılamaz!";
    }
    if (!values.director) {
      errors.username = "Bu alan boş bırakılamaz!";
    }
    if (!values.point) {
      errors.password = "Bu alan boş bırakılamaz!";
    }
    if (!values.startDate) {
      errors.username = "Bu alan boş bırakılamaz!";
    }
    if (!values.endDate) {
      errors.password = "Bu alan boş bırakılamaz!";
    }
    if (!values.type) {
      errors.username = "Bu alan boş bırakılamaz!";
    }
    if (!values.quota) {
      errors.password = "Bu alan boş bırakılamaz!";
    }
    if (!values.longitude) {
      errors.username = "Bu alan boş bırakılamaz!";
    }
    if (!values.latitude) {
      errors.password = "Bu alan boş bırakılamaz!";
    }

    return errors;
  },

  handleSubmit: (values, action) => {
    setTimeout(() => {}, 1000);

    action.props.getValues(values);
  },
})(CreateEventInnerForm);

export default CreateEventForm;
