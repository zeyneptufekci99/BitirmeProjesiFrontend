import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateEvent, getEventById } from "../../slice/event.slice";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import "./event.css";

const UpdateEvent = ({ getEventById, updateEvent }) => {
  const [event, setEvent] = useState({
    id: "",
    name: "",
    imageUrl: "",
    summary: "",
    director: "",
    point: 0,
    isFavorite: false,
  });

  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getEventById({ id: params.id }).then((response) => {
      setEvent(response.payload);
    });
  }, []);

  const updateEventSchema = Yup.object().shape({
    name: Yup.string().required("İsim alanı boş bırakılamaz"),
    imageUrl: Yup.string().required("Resim alanı boş bırakılamaz"),
    summary: Yup.string().required("Özet alanı boş bırakılamaz"),
    director: Yup.string().required("Yönetmen alanı boş bırakılamaz"),
    point: Yup.string().required("Puan alanı boş bırakılamaz"),
  });

  const formik = useFormik({
    initialValues: event,
    enableReinitialize: true,
    validationSchema: updateEventSchema,
    onSubmit: (values) => {
      updateEvent(values).then(() => {
        navigate("/events");
      });
    },
  });
  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit} className="w-75 mx-auto my-5">
          <div className="mb-3">
            <label>Film Adı :</label>
            {formik.errors.name ? (
              <span className="text-danger ps-2">{formik.errors.name}</span>
            ) : null}
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
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
              name="imageUrl"
              onChange={formik.handleChange}
              value={formik.values.imageUrl}
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
              name="summary"
              onChange={formik.handleChange}
              value={formik.values.summary}
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
              name="director"
              onChange={formik.handleChange}
              value={formik.values.director}
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
              name="point"
              onChange={formik.handleChange}
              value={formik.values.point}
            />
          </div>

          <div className="mb-3 text-end">
            <button className="sendButton">Kaydet</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default connect(null, { updateEvent, getEventById })(UpdateEvent);
