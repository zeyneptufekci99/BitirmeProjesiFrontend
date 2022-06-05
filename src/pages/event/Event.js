import "./Event.style.css";
import Layout from "../../components/Layout/Layout";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getEventById } from "../../slice/event.slice";
import { AiOutlinePlus } from "react-icons/ai";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import CommentForm from "../../forms/Comment/CommentForm";
import { getComments, createComment } from "../../slice/comment.slice";
import { Link } from "react-router-dom";
import { Map, YMaps } from "react-yandex-maps";
const Event = ({
  getEventById,
  comments,
  getComments,
  createComment,
  userId,
  roleId,
  isAuth,
}) => {
  const [onClickComment, setOnClickComment] = useState(false);
  const [commentProps, setCommentProps] = useState();

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

  const eventId = useParams();
  useEffect(() => {
    getEventById({ id: eventId.id }).then((res) => {
      setEventProps(res.payload);
    });
    getComments();
  }, []);

  const event = eventProps;
  let navigate = useNavigate();
  const onClickSentComment = (comment) => {
    setCommentProps({
      date: new Date(),
      eventId: eventId.id,
      userId: parseInt(userId),
      content: comment.comment,
    });
  };
  useEffect(() => {
    if (commentProps) {
      createComment(commentProps).then((response) => {
        setOnClickComment(false);
      });
    }
  }, [commentProps]);

  return (
    <Layout>
      <div className="updateButtonContainer">
        {roleId == "Admin" && (
          <Link className="updateButton" to={`/update-event/${eventId.id}`}>
            Güncelle
          </Link>
        )}
      </div>
      <div className="eventInfoBase">
        <div className="eventInfo">
          <div className="ratingWrapper">
            <span className="rating">{event.point} / 10</span>
          </div>

          <img className="eventImage" src={event.imageUrl} alt="" />
          <span className="eventName">{event.name}</span>
          <span className="eventOtherInfo">{event.director}</span>
          <div className="eventOtherInfo">
            <Moment format="DD-MM-YYYY">{event.startDate}</Moment> -{" "}
            <Moment format="DD-MM-YYYY">{event.endDate}</Moment>
          </div>

          <button
            className="buyButton"
            onClick={() => {
              isAuth
                ? navigate("/buy", {
                    state: {
                      eventId: eventId,
                    },
                  })
                : navigate("/sign-in");
            }}
          >
            Bilet Al
          </button>
          <span className="eventQuota">Kontenjan:{event.quota}</span>
        </div>

        <div className="infoRightBox">
          <div className="infoBox">
            <p className="eventSummary">{event.explanation}</p>
          </div>
          <div className="mapContainer">
            <YMaps>
              <div>
                <Map defaultState={{ center: [30.31, 41], zoom: 8 }} />
              </div>
            </YMaps>
          </div>
        </div>
      </div>

      {isAuth && (
        <div className="commentsHeader">
          <button
            onClick={() => setOnClickComment(!onClickComment)}
            className="commentButton"
          >
            {!onClickComment && <AiOutlinePlus className="icon" />}
            {!onClickComment ? "Yorum Yap" : "Bitir"}
          </button>
        </div>
      )}

      {onClickComment && (
        <div className="commentWrapper">
          <CommentForm
            comment={(comm) => onClickSentComment(comm)}
          ></CommentForm>
        </div>
      )}

      {comments &&
        comments.map((item, index) => {
          if (item.eventId == eventId.id) {
            return (
              <div key={index} className="commentWrapper">
                <div className="commentHeader">
                  <h5>{item.username}</h5>

                  <p>{item.date}</p>
                </div>

                <p>{item.content}</p>
              </div>
            );
          }
        })}
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    roleId: state.auth.roleId,
  };
};
export default connect(mapStateToProps, {
  getEventById,
  getComments,
  createComment,
})(Event);
