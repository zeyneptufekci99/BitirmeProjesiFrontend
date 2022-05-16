import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../services/user.service";

const initialState = [];

export const getUsers = createAsyncThunk("users/list", async () => {
  let response = await userService.getAll();
  return response.data;
});

export const createUser = createAsyncThunk("users/create", async (data) => {
  let response = await userService.create(data);
  return response.data;
});

export const removeUser = createAsyncThunk("users/remove", async ({ id }) => {
  let response = await userService.remove(id);
  return {
    name: response.data.name,
    surnaname: response.data.surname,
    username: response.data.username,
    email: response.data.email,
    password: response.data.password,
    roleId: 1,
  };
});

export const updateUser = createAsyncThunk("users/update", async (data) => {
  let response = await userService.update(data);
  return response.data;
});

export const getUserById = createAsyncThunk("users/getById", async ({ id }) => {
  let response = await userService.getById(id);
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [getUserById.fulfilled]: (state, action) => {
      return [action.payload];
    },
    [removeUser.fulfilled]: (state, action) => {
      let index = state.findIndex((film) => film.id === action.payload.id);
      state.splice(index, 1);
    },
    [updateUser.fulfilled]: (state, action) => {
      console.log("acc", action.payload.id);
      let updatedUser = state.findIndex((x) => x.id === action.payload.id);
      state[updatedUser] = {
        ...state[updatedUser],
        ...action.payload,
      };
    },
    [createUser.fulfilled]: (state, action) => {
      return [...state, action.payload];
    },
  },
});

const { reducer } = userSlice;
export default reducer;
