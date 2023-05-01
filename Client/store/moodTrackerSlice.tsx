import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Mood } from "../utils/types";

export interface MoodTrackerState {
  data: Mood[] | null;
}

const initialState: MoodTrackerState = {
  data: [
    { icon: "😊", number: 10, date: new Date() },
    { icon: "👍", number: 8, date: new Date() },
    { icon: "👌", number: 6, date: new Date() },
    { icon: "👎", number: 4, date: new Date() },
    { icon: "😢", number: 2, date: new Date() },
  ],
};

const MoodTrackerSlice = createSlice({
  name: "moodtracker",
  initialState,
  reducers: {
    setCurrentMood: (state, action) => {
      state = action.payload.data;
    },
  },
});

export const { setCurrentMood } = MoodTrackerSlice.actions;

export default MoodTrackerSlice.reducer;
