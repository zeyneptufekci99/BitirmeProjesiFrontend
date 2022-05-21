import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentService from "../services/comment.service";

const initialState = [];

export const getComments = createAsyncThunk("comments/list", async () => {
  let response = await commentService.getAll();
  return response.data;
});

export const createComment = createAsyncThunk(
  "comments/create",
  async (data) => {
    let response = await commentService.create(data);
    return response.data;
  }
);

export const removeComment = createAsyncThunk(
  "comments/remove",
  async ({ id }) => {
    let response = await commentService.remove(id);
    return response.data;
  }
);

export const updateComment = createAsyncThunk(
  "comments/update",
  async (data) => {
    let response = await commentService.update(data);
    return response.data;
  }
);

export const getCommentById = createAsyncThunk(
  "comments/getById",
  async ({ id }) => {
    let response = await commentService.getById(id);
    return response.data;
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState: initialState,
  extraReducers: {
    [getComments.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [getCommentById.fulfilled]: (state, action) => {
      return [action.payload];
    },
    [removeComment.fulfilled]: (state, action) => {
      let index = state.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.splice(index, 1);
    },
    [updateComment.fulfilled]: (state, action) => {
      let updatedComment = state.findIndex((x) => x.id === action.payload.id);
      state[updatedComment] = {
        ...state[updatedComment],
        ...action.payload,
      };
    },
    [createComment.fulfilled]: (state, action) => {
      return [...state, action.payload];
    },
  },
});

const { reducer } = commentSlice;
export default reducer;
