import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./slice/event.slice";

import userReducer from "./slice/user.slice";
import commentReducer from "./slice/comment.slice";
const reducer = {
  events: eventReducer,
  users: userReducer,
  comments: commentReducer,
};

const store = configureStore({
  reducer: reducer,
});

export default store;
