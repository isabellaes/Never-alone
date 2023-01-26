import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { Profile } from "../utils/types";
import {
  updateProfileRequest,
  createProfileRequest,
  getProfileRequest,
  getAllProfilesRequest,
} from "../utils/api";

export interface ProfileState {
  loading: boolean;
  profile: Profile;
  profiles: Profile[] | null;
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
  profiles: null,
};

export const getProfile = createAsyncThunk(
  "profile/GetProfile",
  async (id: number, { rejectWithValue }) => {
    try {
      const respons = await getProfileRequest(id);
      return respons;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Failed to fetch");
    }
  }
);

export const getAllProfiles = createAsyncThunk("profile/GetAll", async () => {
  try {
    const respons = await getAllProfilesRequest();
    console.log(respons);
    return respons;
  } catch (error) {
    return "Failed";
  }
});
/*export const updateProfile = createAsyncThunk
("profile/updateProfile", async (data) => {
  try {
    const respons = await updateProfileRequest(data.id, data.name);
    return respons;
  } catch (error) {
    return rejectWithValue("Failed to fetch");
  }
});*/
export const createProfile = createAsyncThunk<
  Profile,
  {
    id: number;
    name: string;
  }
>("profile/createProfile", async (data, { rejectWithValue }) => {
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
      if (action.payload != null) state.profile = action.payload;
    });
    builder.addCase(getAllProfiles.fulfilled, (state, action) => {
      if (action.payload != null) state.profiles = action.payload;
    });
    /*builder.addCase(createProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });*/
  },
});

export const { setCurrentProfile } = profileSlice.actions;
export default profileSlice.reducer;
