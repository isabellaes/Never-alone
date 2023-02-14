import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Profile } from "../utils/types";
import {
  updateProfileRequest,
  createProfileRequest,
  getProfileRequest,
} from "../utils/api";

export interface ProfileState {
  profile: Profile | null;
}

const initialState: ProfileState = {
  profile: null,
};

export const getProfile = createAsyncThunk<Profile>(
  "profile/Get",
  async (data, { rejectWithValue }) => {
    try {
      const respons = await getProfileRequest();
      return respons;
    } catch (error) {
      return rejectWithValue("Failed to fetch");
    }
  }
);

export const updateProfile = createAsyncThunk<Profile, { name: string }>(
  "profile/update",
  async (data, { rejectWithValue }) => {
    try {
      const respons = await updateProfileRequest(data.name);
      return respons;
    } catch (error) {
      return rejectWithValue("Failed to fetch");
    }
  }
);
export const createProfile = createAsyncThunk<Profile, { name: string }>(
  "profile/create",
  async (data, { rejectWithValue }) => {
    try {
      const respons = await createProfileRequest(data.name);
      return respons;
    } catch (error) {
      return rejectWithValue("Failed to fetch");
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setCurrentProfile: (state, action) => {
      state = action.payload.profile;
    },
  },

  extraReducers(builder) {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
    builder.addCase(createProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
  },
});

export const { setCurrentProfile } = profileSlice.actions;
export default profileSlice.reducer;
