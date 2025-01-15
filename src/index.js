import { addTask, completeTask, removeTask } from "./store/tasks";
import store from "./store/configureStore";

store.subscribe(()=>{
    console.log("update", store.getState());  
})


store.dispatch(addTask("Task 1"))
store.dispatch(addTask("Task 2"))
console.log(store.getState());

store.dispatch(completeTask(2))
console.log(store.getState());

store.dispatch(removeTask(1))
console.log(store.getState());


console.log("Redux Starter Project!!");
