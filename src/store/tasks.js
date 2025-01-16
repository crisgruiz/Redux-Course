 import { createSlice } from "@reduxjs/toolkit"

let id = 0

 const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
      addTask: (state, action) => {
        state.push({
          id: ++id, 
          task: action.payload.task, 
          complete: false
        })
      },
      removeTask: (state, action) => {
        const index = state.findIndex(task => task.id === action.payload.id)
        if (index !== -1) {
          state.splice(index, 1)
        }
      },
      completeTask: (state, action) => {
        const index = state.findIndex(task => task.id === action.payload.id)
        if (index !== -1) {
          state[index].complete = true
        }
      }
    }
  })

  export const { addTask, removeTask, completeTask } = tasksSlice.actions
  export default tasksSlice.reducer

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