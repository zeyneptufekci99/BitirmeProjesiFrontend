import "./Card.style.css";

import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const Card = (props) => {
  return (
    <>
      <Link className="bannerBase" to={`/${props.type}/${props.id}`}>
        <img className="image" src={props.imageUrl} alt="poster" />
        <span className="name">{props.name}</span>
      </Link>
    </>
  );
};

export default Card;
