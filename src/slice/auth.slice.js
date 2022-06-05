import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth-service";
import jwtDecode from "jwt-decode";

const authState = {
  isAuth: false,
  name: "",
  roleId: "",
  userId: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    const response = await authService.login({ username, password });
    if (response.status === 201) {
      // token bilgisi,
      // decode et
      localStorage.setItem("token", response.data.token);
      let decodedToken = jwtDecode(response.data.token);

      console.log("decode edilmiş token", decodedToken);
      return {
        isAuth: true,
        name: decodedToken.name,
        roleId: decodedToken.roleId,
        userId: decodedToken.userId,
      };
    }
    return {
      isAuth: false,
      name: "",
      roleId: "",
      userId: "",
    };
  }
);

export const logout = createAsyncThunk("auth/logout", () => {
  localStorage.removeItem("token");
  return {
    isAuth: false,
    name: "",
    roleId: "",
    userId: "",
  };
});

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      return { ...action.payload };
    },
    [logout.fulfilled]: (state, action) => {
      return { ...action.payload };
    },
  },
});

const { reducer } = authSlice;
export default reducer;
