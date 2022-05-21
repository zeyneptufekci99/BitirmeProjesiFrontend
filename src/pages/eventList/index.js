import React from "react";
import List from "../../components/List/List";
import { connect } from "react-redux";
import { getEvents } from "../../slice/event.slice";
import "./index.css";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
class EventList extends React.Component {
  componentDidMount() {
    this.props.getEvents();
  }
  render() {
    const { events } = this.props;

    return (
      <Layout>
        <Link className="createButton" to={"/create-event"}>
          Etkinlik Oluştur
        </Link>
        <p className="eventlist-heading">Etkinliler</p>
        <List list={events} type="events"></List>
      </Layout>
    );
  }
}
const mapStateToProps = (state) => {
  return { events: state.events };
};
export default connect(mapStateToProps, { getEvents })(EventList);
