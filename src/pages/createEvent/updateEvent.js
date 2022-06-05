import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateEvent, getEventById } from "../../slice/event.slice";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import "./event.css";
import UpdateEventForm from "../../forms/UpdateEvent/UpdateEventFrom";
import Layout from "../../components/Layout/Layout";
const UpdateEvent = ({ getEventById, events, updateEvent }) => {
  const [eventProps, setEventProps] = useState({
    name: "",
    imageUrl: "",
    explanation: "",
    director: "",
    point: 0,
    startDate: new Date(),
    endDate: new Date(),
    type: "",
    quota: 0,
    longitude: 0,
    latitude: 0,
  });

  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getEventById({ id: params.id });
  }, []);

  const event = events[0];
  useEffect(() => {
    if (eventProps.name !== "") {
      const modifiedValue = { ...eventProps, id: params.id };

      updateEvent(modifiedValue).then((response) => {
        navigate("/events");
      });
    }
  }, [eventProps]);

  return (
    <Layout>
      <UpdateEventForm
        event={event}
        getValues={(a) => setEventProps(a)}
      ></UpdateEventForm>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return { events: state.events };
};
export default connect(mapStateToProps, { updateEvent, getEventById })(
  UpdateEvent
);
