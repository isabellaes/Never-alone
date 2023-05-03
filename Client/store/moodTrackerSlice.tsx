import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Mood } from "../utils/types";
import { getAllMoodsRequest, createMoodRequest } from "../utils/api";

export interface MoodTrackerState {
  data: Mood[] | null;
}

const initialState: MoodTrackerState = {
  data: null,
};

export const createMood = createAsyncThunk<Mood, { icon: string }>(
  "mood/create",
  async (data, { rejectWithValue }) => {
    try {
      const respons = await createMoodRequest(data.icon);
      return respons;
    } catch (error) {
      return rejectWithValue("Failed to fetch");
    }
  }
);

export const getAllMoods = createAsyncThunk<Mood[]>(
  "mood/getAll",
  async (data, { rejectWithValue }) => {
    try {
      const respons = await getAllMoodsRequest();
      return respons;
    } catch (error) {
      return rejectWithValue("Failed to fetch");
    }
  }
);

const MoodTrackerSlice = createSlice({
  name: "moodtracker",
  initialState,
  reducers: {
    setCurrentMood: (state, action) => {
      state = action.payload.data;
    },
  },
  extraReducers(builder) {
    builder.addCase(createMood.fulfilled, (state, action) => {
      state.data?.push(action.payload);
    });
    builder.addCase(getAllMoods.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setCurrentMood } = MoodTrackerSlice.actions;

export default MoodTrackerSlice.reducer;
