import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./slice/event.slice";
import authReducer from "./slice/auth.slice";
import userReducer from "./slice/user.slice";
import commentReducer from "./slice/comment.slice";
const reducer = {
  events: eventReducer,
  users: userReducer,
  comments: commentReducer,
  auth: authReducer,
};

const store = configureStore({
  reducer: reducer,
});

export default store;
