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
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}
const Event = ({
  events,
  getEventById,
  comments,
  getComments,
  createComment,
  userId,
}) => {
  const eventId = useParams();
  useEffect(() => {
    getEventById({ id: eventId });
    getComments();
  }, []);

  const [onClickComment, setOnClickComment] = useState(false);
  const [commentProps, setCommentProps] = useState();
  const event = events[0];
  let navigate = useNavigate();
  const onClickSentComment = (comment) => {
    setCommentProps({
      date: new Date(),
      eventId: eventId.id,
      userId: userId,
      content: comment.comment,
    });
  };
  useEffect(() => {
    if (commentProps) {
      console.log("commentprops,", commentProps);
      createComment(commentProps).then((response) => {
        console.log("repsonse", response);
        setOnClickComment(false);
      });
    }
  }, [commentProps]);

  return (
    <Layout>
      <div className="updateButtonContainer">
        <Link className="updateButton" to={`/update-event/${eventId.id}`}>
          Güncelle
        </Link>
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

          <button className="buyButton" onClick={() => navigate("/buy")}>
            Bilet Al
          </button>
          <span className="eventQuota">Kontenjan:{event.quota}</span>
        </div>

        <div className="infoRightBox">
          <div className="infoBox">
            <p className="eventSummary">{event.explanation}</p>
          </div>

          <div className="maps">Maps gelecek</div>
        </div>
      </div>

      <div className="commentsHeader">
        <button
          onClick={() => setOnClickComment(!onClickComment)}
          className="commentButton"
        >
          {!onClickComment && <AiOutlinePlus className="icon" />}
          {!onClickComment ? "Yorum Yap" : "Bitir"}
        </button>
      </div>

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
  return { events: state.events, comments: state.comments };
};
export default connect(mapStateToProps, {
  getEventById,
  getComments,
  createComment,
})(Event);
