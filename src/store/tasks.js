 import { createAction } from "@reduxjs/toolkit"

// Actions
export const addTask = createAction("ADD_TASK")
export const removeTask = createAction("REMOVE_TASK")
export const completeTask = createAction("COMPLETE_TASK")

// Reducer

let id = 0

const reducer = (state=[], action)=> {
if(action.type === addTask.type) {
    return [...state, {id: ++id, task: action.payload.task, complete: false}]
}
else if (action.type === removeTask.type){
    return state.filter(task=>task.id !== action.payload.id)
}

else if (action.type === completeTask.type){
    return state.map(task => task.id === action.payload.id ? {...task, complete: true} : task)
}

return state
}

export default reducer
