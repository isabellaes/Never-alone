import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../utils/types";
import { loginRequest, registerRequest } from "../utils/api";

export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: { id: 0, username: "test", password: "test", email: "test" },
};

export const login = createAsyncThunk<
  User,
  { username: string; password: string }
>("authentication/login", async (data, { rejectWithValue }) => {
  try {
    const respons = await loginRequest(data.username, data.password);
    return respons;
  } catch (error) {
    return rejectWithValue("Failed to fetch");
  }
});

export const register = createAsyncThunk<
  User,
  { email: string; username: string; password: string }
>("authentication/register", async (data, { rejectWithValue }) => {
  try {
    const respons = await registerRequest(
      data.email,
      data.username,
      data.password
    );
    return respons;
  } catch (error) {
    return rejectWithValue("Failed to fetch");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state = action.payload.user;
    },
  },

  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
