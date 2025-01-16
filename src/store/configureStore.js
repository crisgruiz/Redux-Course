import employeesReducer from "./employees";
import taskReducer from "./tasks"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({reducer: {
    tasks: taskReducer,
    employees: employeesReducer,

}})

export default store