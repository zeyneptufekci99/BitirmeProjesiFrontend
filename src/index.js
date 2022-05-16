import ReactDOM from "react-dom/client";
import "./index.css";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import ApplicationRouter from "./routers/application-router";
const AuthProvider = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header isSignIn={isSignedIn} message={true}></Header>
          <ApplicationRouter
            setIsSignedIn={() => setIsSignedIn(true)}
          ></ApplicationRouter>
        </BrowserRouter>
      </Provider>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <AuthProvider></AuthProvider>
  </>
);
