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
import Donate from "../pages/donate";
import RequireAuth from "../utils/require-auth";
function ApplicationRouter() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth roles={["User", "Admin", "Donor"]}>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/events/:id"
          element={<EventWrapper></EventWrapper>}
        ></Route>

        <Route
          path="donate"
          element={
            <RequireAuth roles={["Donor", "Admin"]}>
              <Donate></Donate>
            </RequireAuth>
          }
        ></Route>
        <Route path="/events" element={<EventList></EventList>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>

        <Route
          path="/buy"
          element={
            <RequireAuth roles={["Admin", "Donor", "User"]}>
              <Buy></Buy>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/create-event"
          element={
            <RequireAuth roles={["Admin"]}>
              <CreateEvent></CreateEvent>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/update-event/:id"
          element={
            <RequireAuth roles={["Admin"]}>
              <UpdateEvent></UpdateEvent>
            </RequireAuth>
          }
        ></Route>

        <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>

        <Route
          path="/profile"
          element={
            <RequireAuth roles={["User", "Admin", "Donor"]}>
              <Profile></Profile>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default ApplicationRouter;
