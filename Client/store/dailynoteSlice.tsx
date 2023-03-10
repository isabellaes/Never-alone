import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DailyNote, User } from "../utils/types";
import {
  getDailyNoteRequest,
  updateDailyNoteRequest,
  createDailyNoteRequest,
  deleteDailyNoteRequest,
} from "../utils/api";

export interface DailyNoteState {
  dailyNote: DailyNote[] | null;
}

const initialState: DailyNoteState = {
  dailyNote: null,
};

export const getDailyNote = createAsyncThunk<DailyNote[]>(
  "dailyNote/GetAllDailyNote",
  async (data, { rejectWithValue }) => {
    try {
      const respons = await getDailyNoteRequest();
      return respons;
    } catch (error) {
      return rejectWithValue("Failed to fetch");
    }
  }
);

export const updateDailyNote = createAsyncThunk<
  DailyNote[],
  { id: string; title: string }
>("dailyNote/updateDailyNote", async (data, { rejectWithValue }) => {
  try {
    const respons = await updateDailyNoteRequest(data.id, data.title);
    return respons;
  } catch (error) {
    return rejectWithValue("Failed to fetch");
  }
});
export const createDailyNote = createAsyncThunk<
  DailyNote,
  { title: string; content: string }
>("dailyNote/createDailyNote", async (data, { rejectWithValue }) => {
  try {
    const respons = await createDailyNoteRequest(data.title, data.content);
    return respons;
  } catch (error) {
    return rejectWithValue("Failed to fetch");
  }
});

export const deleteDailyNote = createAsyncThunk<
  boolean,
  string
>("dailyNote/deleteDailyNote", async (id, { rejectWithValue }) => {
  try {
    const response = await deleteDailyNoteRequest(id);
    return response;
  } catch (error) {
    return rejectWithValue("Failed to fetch");
  }
});

const dailyNoteSlice = createSlice({
  name: "dailyNote",
  initialState,
  reducers: {
    setCurrentDailyNote: (state, action) => {
      state = action.payload.dailyNote;
    },
  },
  extraReducers(builder) {
    builder.addCase(getDailyNote.fulfilled, (state, action) => {
      state.dailyNote = action.payload;
    });

    builder.addCase(createDailyNote.fulfilled, (state, action) => {
      if (state.dailyNote) state.dailyNote.push(action.payload);
    });
    builder.addCase(updateDailyNote.fulfilled, (state, action) => {
      state.dailyNote = action.payload;
    });
    builder.addCase(deleteDailyNote.fulfilled, (state, action) => {
      if (state.dailyNote) {
        state.dailyNote = state.dailyNote.filter(
          (note) => note.id !== action.meta.arg
        );
      }
    });
  },
});

export const { setCurrentDailyNote } = dailyNoteSlice.actions;

export default dailyNoteSlice.reducer;
