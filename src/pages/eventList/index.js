import React from "react";
import List from "../../components/List/List";
import { connect } from "react-redux";
import { getEvents } from "../../slice/event.slice";
import "./index.css";

class EventList extends React.Component {
  componentDidMount() {
    this.props.getEvents();
  }
  render() {
    const { events } = this.props;

    return (
      <>
        <p className="eventlist-heading">Events</p>
        <List
          onClickLiked={() => console.log("Tıklandı")}
          list={events}
          type="events"
          isFavorite={false}
        ></List>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { events: state.events };
};
export default connect(mapStateToProps, { getEvents })(EventList);
