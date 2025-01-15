
import * as actionTypes from "./actionTypes"
let id = 0

const reducer = (state=[], action)=> {
if(action.type === actionTypes.ADD_TASK) {
    return [...state, {id: ++id, task: action.payload.task, complete: false}]
}
else if (action.type === actionTypes.REMOVE_TASK){
    return state.filter(task=>task.id !== action.payload.id)
}

else if (action.type === actionTypes.COMPLETE_TASK){
    return state.map(task => task.id === action.payload.id ? {...task, complete: true} : task)
}

return state
}

export default reducer