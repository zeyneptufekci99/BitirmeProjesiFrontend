import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../../slice/event.slice";
import Layout from "../../components/Layout/Layout";
import "./event.css";
import * as Yup from "yup";
import CreateEventForm from "../../forms/CreateEvent/CreateEventFrom";

const CreateEvent = (props) => {
  let navigate = useNavigate();
  const [event, setEvent] = useState({
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

  useEffect(() => {
    if (event.name !== "") {
      props.createEvent(event).then((response) => {
        navigate("/events");
      });
    }
  }, [event]);

  return (
    <Layout>
      <CreateEventForm getValues={(a) => setEvent(a)}></CreateEventForm>
    </Layout>
  );
};
export default connect(null, { createEvent })(CreateEvent);
