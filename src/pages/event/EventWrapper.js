import React from "react";
import { useParams } from "react-router-dom";
import Event from "./Event";

function EventWrapper(props) {
  const params = useParams();

  return <Event {...props} params={params} />;
}

export default EventWrapper;
