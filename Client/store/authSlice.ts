import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, LogInRespons, Error, RegisterRespons } from "../utils/types";
import { loginRequest, registerRequest } from "../utils/api";

export interface AuthState {
  user: User | null;
  token: string | null;
  expiration: string | null;
  errormessage: string | null;
  registeraccepted: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  expiration: null,
  errormessage: null,
  registeraccepted: false,
};

export const login = createAsyncThunk<
  LogInRespons | Error,
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
  RegisterRespons | Error,
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
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.expiration = action.payload.expiration;
      state.errormessage = null;
      state.registeraccepted = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.expiration = null;
    },
  },

  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      const respons = action.payload as LogInRespons;
      state.user = respons.user;
      state.token = respons.token;
      state.expiration = respons.expiration;
    });
    builder.addCase(login.rejected, (state, action) => {
      const respons = action.payload as Error;
      state.errormessage = respons.error;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      const respons = action.payload as RegisterRespons;
      state.registeraccepted = respons.accepted;
    });

    builder.addCase(register.rejected, (state, action) => {
      const respons = action.payload as Error;
      state.errormessage = respons.error;
      state.registeraccepted = false;
    });
  },
});

export const { setCurrentUser, logout } = authSlice.actions;
export default authSlice.reducer;
