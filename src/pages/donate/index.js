import Layout from "../../components/Layout/Layout";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./index.style.css";
import { updateEvent } from "../../slice/event.slice";
import { getEvents } from "../../slice/event.slice";
import { Col, Container, Row } from "react-grid-system";
import DonateForm from "../../forms/Donate/DonateForm";
import { useNavigate } from "react-router-dom";

const Donate = ({ updateEvent, events, getEvents }) => {
  useEffect(() => {
    getEvents();
  }, []);

  let navigate = useNavigate();
  const [eventProps, setEventProps] = useState({
    id: 0,
    name: "",
    imageUrl: "",
    explanation: "",
    director: "",
    point: 0,
    startDate: new Date(),
    endDate: new Date(),
    type: "",
    quota: 0,
    donated: 0,
    longitude: 0,
    latitude: 0,
  });

  const onClickSubmit = (values) => {
    if (values) {
      updateEvent(values).then((response) => {
        navigate("/events/" + eventProps.id);
      });
    }
  };

  return (
    <Layout>
      <div className="donateBase">
        <span className="pageTitle">
          {eventProps.name != ""
            ? "Kaç tane bağışlamak istediğinizi girin"
            : "Etkinlik seçiniz"}
        </span>
        {eventProps.name != "" && (
          <DonateForm
            event={eventProps}
            getValues={(values) => onClickSubmit(values)}
          ></DonateForm>
        )}
        <Container align="center" justify="center">
          <Row align="center" justify="center" debug>
            {events &&
              events.map((event, index) => (
                <Col lg={3} md={5} sm={8} xs={8} key={index}>
                  <button
                    className="eventButtonContainer"
                    onClick={() => setEventProps(event)}
                  >
                    <div className="eventButtonBoxContainser">
                      <img
                        className="eventButtonImage"
                        src={event.imageUrl}
                      ></img>
                      <span>{event.name}</span>
                    </div>
                  </button>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return { events: state.events };
};
export default connect(mapStateToProps, { updateEvent, getEvents })(Donate);
