import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/http";

let id = 0;

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

export const fetchTasks = createAsyncThunk(
  "fetchTasks",
  async (a, { rejectWithValue }) => {
    try {
      const response = await axios.get("/tasks");
      return { tasks: response.data };
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTasks: (state, action) => {
      state.tasks = action.payload.tasks;
    },
    addTask: (state, action) => {
      state.tasks.push({
        id: ++id,
        task: action.payload.task,
        complete: false,
      });
    },
    removeTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
    completeTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index].complete = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload.tasks;
      state.loading = false;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    });
  },
});

export const { getTasks, addTask, removeTask, completeTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
