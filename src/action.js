import * as actionTypes from "./actionTypes"

export const addTask = (task)=> {
    return {type:actionTypes.ADD_TASK, payload:{task: task}}
}

export const removeTask = (id) => {
    return {type: actionTypes.REMOVE_TASK, payload:{id: id}}
}

export const completeTask = (id)=>{
    return {type: actionTypes.COMPLETE_TASK, payload: {id: id}}
}