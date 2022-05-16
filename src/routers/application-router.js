import { Route, Routes } from "react-router-dom";

import Home from "../pages/home";

import EventList from "../pages/eventList";
import Profile from "../pages/profile";
import React, { useState } from "react";
import SignIn from "../pages/sign-in";
import SignUp from "../pages/sign-up";
import CreateEvent from "../pages/createEvent/createEvent";
import UpdateEvent from "../pages/createEvent/updateEvent";
import EventWrapper from "../pages/event/EventWrapper.js";
import Buy from "../pages/buy";
import Contact from "../pages/contact";
function ApplicationRouter(props) {
  const [userId, setUserId] = useState(-1);
  const [isSignedIn, setSignedIn] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isSignedIn ? (
              <Home></Home>
            ) : (
              <SignIn
                setIsSignedIn={() => {
                  props.setIsSignedIn();
                  setSignedIn(true);
                }}
                getUserId={(id) => setUserId(id)}
              ></SignIn>
            )
          }
        ></Route>
        <Route
          path="/events/:id"
          element={<EventWrapper></EventWrapper>}
        ></Route>
        <Route path="/events" element={<EventList></EventList>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/buy" element={<Buy></Buy>}></Route>
        <Route
          path="/create-event"
          element={<CreateEvent></CreateEvent>}
        ></Route>
        <Route path="/events/:id" element={<UpdateEvent></UpdateEvent>}></Route>
        <Route
          path="/sign-in"
          element={
            <SignIn
              setIsSignedIn={() => {
                props.setIsSignedIn();
                setSignedIn(true);
              }}
              getUserId={(id) => setUserId(id)}
            ></SignIn>
          }
        ></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route
          path="/profile"
          element={<Profile userId={userId}></Profile>}
        ></Route>
      </Routes>
    </>
  );
}

export default ApplicationRouter;
