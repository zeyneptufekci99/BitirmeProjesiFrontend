import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import eventService from "../services/event.service";

const initialState = [];

export const getEvents = createAsyncThunk("events/list", async () => {
  let response = await eventService.getAll();
  return response.data;
});

export const createEvent = createAsyncThunk("events/create", async (data) => {
  let response = await eventService.create(data);
  return response.data;
});

export const removeEvent = createAsyncThunk("events/remove", async ({ id }) => {
  let response = await eventService.remove(id);
  return response.data;
});

export const updateEvent = createAsyncThunk("events/update", async (data) => {
  let response = await eventService.update(data);
  return response.data;
});

export const getEventById = createAsyncThunk(
  "events/getById",
  async ({ id }) => {
    let response = await eventService.getById(id);
    return response.data;
  }
);

const eventSlice = createSlice({
  name: "event",
  initialState: initialState,
  extraReducers: {
    [getEvents.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [getEventById.fulfilled]: (state, action) => {
      return [action.payload];
    },
    [removeEvent.fulfilled]: (state, action) => {
      let index = state.findIndex((event) => event.id === action.payload.id);
      state.splice(index, 1);
    },
    [updateEvent.fulfilled]: (state, action) => {
      let updatedEvent = state.findIndex((x) => x.id === action.payload.id);
      state[updatedEvent] = {
        ...state[updatedEvent],
        ...action.payload,
      };
    },
    [createEvent.fulfilled]: (state, action) => {
      return [...state, action.payload];
    },
  },
});

const { reducer } = eventSlice;
export default reducer;
