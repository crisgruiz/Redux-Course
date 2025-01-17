import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import error from "./middleware/error";
let id = 0;

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

export const fetchTasks = createAsyncThunk("fetchTasks", async () => {
  const response = await axios.get("http://localhost:5500/api/tasks");
  return { tasks: response.data };
});

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
  },
});

export const { getTasks, addTask, removeTask, completeTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;

// CreateReducer method

// // Actions
// export const addTask = createAction("ADD_TASK")
// export const removeTask = createAction("REMOVE_TASK")
// export const completeTask = createAction("COMPLETE_TASK")

// // Reducer

// let id = 0

// const reducer = createReducer([], (builder) => {
//     builder
//       .addCase(addTask, (state, action) => {
//         state.push({
//           id: ++id,
//           task: action.payload.task,
//           complete: false
//         })
//       })
//       .addCase(removeTask, (state, action) => {
//         const index = state.findIndex(task => task.id === action.payload.id)
//         state.splice(index, 1)
//       })
//       .addCase(completeTask, (state, action) => {
//         const index = state.findIndex(task => task.id === action.payload.id)
//         if (index !== -1) {
//           state[index].complete = true
//         }
//       })
//   })

//   export default reducer
