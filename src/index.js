import { addTask, completeTask, removeTask } from "./store/tasks";
import store from "./store/configureStore";

store.subscribe(()=>{
    console.log("update", store.getState());  
})


store.dispatch(addTask({task: "Task 1"}))
store.dispatch(addTask({task: "Task 2"}))
console.log(store.getState());

store.dispatch(completeTask({id: 2}))
console.log(store.getState());

store.dispatch(removeTask({id: 1}))
console.log(store.getState());


console.log("Redux Starter Project!!");
