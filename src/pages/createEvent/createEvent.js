import { useFormik } from "formik";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../../slice/event.slice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./event.css";
import * as Yup from "yup";

const CreateEvent = (props) => {
  let navigate = useNavigate();
  const [event, setEvent] = useState({
    id: 0,
    name: "",
    imageUrl: "",
    summary: "",
    director: "",
    point: 0,
    isFavorite: false,
  });

  const createEventFormSchema = Yup.object().shape({
    name: Yup.string().required("İsim alanı boş bırakılamaz"),
    imageUrl: Yup.string().required("Resim alanı boş bırakılamaz"),
    summary: Yup.string().required("Özet alanı boş bırakılamaz"),
    director: Yup.string().required("Yönetmen alanı boş bırakılamaz"),
    point: Yup.string().required("Puan alanı boş bırakılamaz"),
  });

  const formik = useFormik({
    initialValues: event,
    enableReinitialize: true,
    validationSchema: createEventFormSchema,
    onSubmit: (values) => {
      props.createEvent(values).then((response) => {
        navigate("/events");
      });
    },
  });

  return (
    <div className="container">
      <form
        className="w-75 mx-auto my-5 shadow p-5"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-3">
          <label>Film Adı :</label>
          {formik.errors.name ? (
            <span className="text-danger ps-2">{formik.errors.name}</span>
          ) : null}
          <input
            type="text"
            className="form-control"
            value={formik.values.name}
            name="name"
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Film Resim Adresi :</label>
          {formik.errors.imageUrl ? (
            <span className="text-danger ps-2">{formik.errors.imageUrl}</span>
          ) : null}
          <input
            type="text"
            className="form-control"
            value={formik.values.imageUrl}
            name="imageUrl"
            onChange={formik.handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Özet :</label>
          {formik.errors.summary ? (
            <span className="text-danger ps-2">{formik.errors.summary}</span>
          ) : null}
          <input
            type="text"
            className="form-control"
            value={formik.values.summary}
            name="summary"
            onChange={formik.handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Yönetmen :</label>
          {formik.errors.director ? (
            <span className="text-danger ps-2">{formik.errors.director}</span>
          ) : null}
          <input
            type="text"
            className="form-control "
            value={formik.values.director}
            name="director"
            onChange={formik.handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Puan :</label>
          {formik.errors.point ? (
            <span className="text-danger ps-2">{formik.errors.point}</span>
          ) : null}
          <input
            type="text"
            className="form-control"
            value={formik.values.point}
            name="point"
            onChange={formik.handleChange}
          />
        </div>

        <div className="mb-3 text-end">
          <button className="sendButton">Kaydet</button>
        </div>
      </form>
    </div>
  );
};
export default connect(null, { createEvent })(CreateEvent);
