import "./Event.style.css";
import Layout from "../../components/Layout/Layout";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getEventById } from "../../slice/event.slice";
import { AiOutlinePlus } from "react-icons/ai";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

const commentList = [
  {
    user: "abc",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "10 Nisan 2022, 14:56",
  },
  {
    user: "abc",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "10 Nisan 2022, 14:56",
  },
  {
    user: "abc",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "10 Nisan 2022, 14:56",
  },
];

const Event = ({ events, getEventById }) => {
  const eventId = useParams();
  useEffect(() => {
    getEventById({ id: eventId });
  }, []);

  const event = events[0];
  let navigate = useNavigate();
  return (
    <Layout>
      <div className="eventInfoBase">
        <div className="eventInfo">
          <div className="ratingWrapper">
            <span className="rating">{event.point} / 10</span>
          </div>

          <img className="eventImage" src={event.imageUrl} alt="" />
          <span>{event.name}</span>
          <span>{event.director}</span>
          <div>
            <Moment format="DD-MM-YYYY">{event.startDate}</Moment> /{" "}
            <Moment format="DD-MM-YYYY">{event.endDate}</Moment>
          </div>

          <button className="buyButton" onClick={() => navigate("/buy")}>
            Bilet Al
          </button>
          <span>Kontenjan: {event.quota}</span>
        </div>

        <div className="infoRightBox">
          <div className="infoBox">
            <p className="eventSummary">{event.explanation}</p>
          </div>

          <div className="maps">Maps gelecek</div>
        </div>
      </div>

      <div className="commentsHeader">
        <button className="commentButton">
          <AiOutlinePlus className="icon" />
          Yorum Yap
        </button>
      </div>

      {commentList.map((item, index) => (
        <div className="commentWrapper">
          <div className="commentHeader">
            <h5>{item.user}</h5>

            <p>{item.date}</p>
          </div>

          <p>{item.content}</p>
        </div>
      ))}
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return { events: state.events };
};
export default connect(mapStateToProps, { getEventById })(Event);
