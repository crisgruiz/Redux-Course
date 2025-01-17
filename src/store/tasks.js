import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let id = 0;

export const fetchTasks = createAsyncThunk("fetchTasks", async () => {
  const response = await axios.get("http://localhost:5500/api/tasks");
  return { tasks: response.data };
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    getTasks: (state, action) => {
      return action.payload.task;
    },
    addTask: (state, action) => {
      state.push({
        id: ++id,
        task: action.payload.task,
        complete: false,
      });
    },
    removeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    completeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state[index].complete = true;
      }
    },
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
