import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DailyNote, User } from "../utils/types";
import {
  getDailyNoteRequest,
  updateDailyNoteRequest,
  createDailyNoteRequest,
} from "../utils/api";

  export interface DailyNoteState {
  dailyNote: DailyNote [];
}

const initialState: DailyNoteState = {
  dailyNote: [{
    id: "1",
    title: "test titel",
    content: "testar content",
    userId: "1",
    user: {id: "0", username: "test", password: "test", email: "test" }

  },
  {
    id: "2",
    title: "test titel2",
    content: "testar content2",
    userId: "2",
    user: {id: "0", username: "test", password: "test", email: "test" }
}]
  
}

// export const getDailyNotes = createAsyncThunk(
//   "dailyNote/GetDailyNote",
//   async (data, { rejectWithValue }) => {
//     try {
//       const respons = await getDailyNoteRequest();
//       return respons;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue("Failed to fetch");
//     }
//   }
// );
  
export const getDailyNote = createAsyncThunk<DailyNote[], {}>(
  "dailyNote/GetAllDailyNote",
  async (data, { rejectWithValue }) => {
    try {
      const respons = await getDailyNoteRequest();
      return respons;
    } catch (error) {
      console.log(error);
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
  { id: string, title: string, content: string, UserId: string, user: User}
>("dailyNote/createDailyNote", async (data, { rejectWithValue }) => {
  try {
    const respons = await createDailyNoteRequest(data.id, data.title, data.content, data.UserId, data.user);
    return respons;
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
   
    builder.addCase(getDailyNote.fulfilled, (state, action: PayloadAction<DailyNote[]>) => {
      state.dailyNote = action.payload;
    });
  
    builder.addCase(createDailyNote.fulfilled, (state, action: PayloadAction<DailyNote>) => {
      state.dailyNote.push(action.payload)
    });
    builder.addCase(updateDailyNote.fulfilled, (state, action: PayloadAction<DailyNote[]>) => {
      state.dailyNote = action.payload;
    });
  },
});

export const { setCurrentDailyNote} = dailyNoteSlice.actions;


export default dailyNoteSlice.reducer;

