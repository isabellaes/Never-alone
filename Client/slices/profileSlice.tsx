import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Profile } from "../utils/types";
import {
  updateProfileRequest,
  createProfileRequest,
  getProfileRequest,
} from "../utils/api";

export interface ProfileState {
  loading: boolean;
  profile: Profile;
  fetchInfo: { type: "success" | "error"; message: string } | null;
}

const initialState: ProfileState = {
  loading: false,
  fetchInfo: null,
  profile: {
    id: 0,
    name: "Test",
    image: "test",
    userId: 0,
    user: { id: 0, username: "test", password: "test", email: "test" },
  },
};

export const getProfile = createAsyncThunk<
  Profile,
  {
    id: number;
  }
>("/getProfile", async (data, { rejectWithValue }) => {
  try {
    const respons = await getProfileRequest(data.id);
    return respons;
  } catch (error) {
    return rejectWithValue("Failed to fetch");
  }
});
export const updateProfile = createAsyncThunk<
  Profile,
  {
    id: number;
    name: string;
  }
>("/updateProfile", async (data, { rejectWithValue }) => {
  try {
    const respons = await updateProfileRequest(data.id, data.name);
    return respons;
  } catch (error) {
    return rejectWithValue("Failed to fetch");
  }
});
export const createProfile = createAsyncThunk<
  Profile,
  {
    id: number;
    name: string;
  }
>("/createProfile", async (data, { rejectWithValue }) => {
  try {
    const respons = await createProfileRequest(data.id, data.name);
    return respons;
  } catch (error) {
    return rejectWithValue("Failed to fetch");
  }
});

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setCurrentProfile: (state, action) => {
      state = action.payload.profile;
    },
  },

  extraReducers(builder) {
    builder.addCase(getProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProfile.rejected, (state) => {
      state.loading = false;
      state.fetchInfo = {
        type: "error",
        message: "Uppdatering av profil misslyckades",
      };
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profile.id = action.payload.id;
      state.profile.image = action.payload.image;
      state.profile.name = action.payload.name;
      state.profile.user = action.payload.user;
      state.profile.userId = action.payload.userId;
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
