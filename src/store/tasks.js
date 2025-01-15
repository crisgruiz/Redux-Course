 // Action types
 
 const ADD_TASK = "ADD_TASK"
 const REMOVE_TASK = "REMOVE_TASK"
 const COMPLETE_TASK = "COMPLETE_TASK"

// Actions

export const addTask = (task)=> {
    return {type: ADD_TASK, payload:{task: task}}
}
export const removeTask = (id) => {
    return {type: REMOVE_TASK, payload:{id: id}}
}
export const completeTask = (id)=>{
    return {type: COMPLETE_TASK, payload: {id: id}}
}

// Reducer

let id = 0

const reducer = (state=[], action)=> {
if(action.type === ADD_TASK) {
    return [...state, {id: ++id, task: action.payload.task, complete: false}]
}
else if (action.type === REMOVE_TASK){
    return state.filter(task=>task.id !== action.payload.id)
}

else if (action.type === COMPLETE_TASK){
    return state.map(task => task.id === action.payload.id ? {...task, complete: true} : task)
}

return state
}

export default reducer
