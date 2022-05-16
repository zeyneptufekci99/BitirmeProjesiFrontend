import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./slice/event.slice";

import userReducer from "./slice/user.slice";

const reducer = {
  events: eventReducer,
  users: userReducer,
};

const store = configureStore({
  reducer: reducer,
});

export default store;
