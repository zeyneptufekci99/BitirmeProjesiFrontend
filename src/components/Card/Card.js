import "./Card.style.css";

import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const Card = props => {
  const [isLiked, setIsLiked] = useState(props.isLiked);

  const onClickLikedEvent = e => {
    e.preventDefault();
    setIsLiked(!isLiked);
    props.onClickLiked();
  };

  return (
    <>
      <Link className='bannerBase' to={`/${props.type}/${props.id}`}>
        <img className='image' src={props.imageUrl} alt='message' />
        <BsHeartFill
          onClick={onClickLikedEvent}
          className='likeIcon'
          fill={isLiked ? "#CA644E" : "#fff"}
        />
        <span className='name'>{props.name}</span>
      </Link>
    </>
  );
};

export default Card;
