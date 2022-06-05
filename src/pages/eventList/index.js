import React, { useState } from "react";
import List from "../../components/List/List";
import { connect } from "react-redux";
import { getEvents } from "../../slice/event.slice";
import "./index.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import Layout from "../../components/Layout/Layout";
import RequireAuth from "../../utils/require-auth";
const EventList = ({ events, getEvents, isAuth, roleId }) => {
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Layout>
      {roleId == "Admin" && (
        <Link className="createButton" to={"/create-event"}>
          Etkinlik Oluştur
        </Link>
      )}

      <p className="eventlist-heading">Etkinliler</p>
      <List list={events} type="events"></List>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return {
    events: state.events,
    isAuth: state.auth.isAuth,
    roleId: state.auth.roleId,
  };
};
export default connect(mapStateToProps, { getEvents })(EventList);
