import employeesReducer from "./employees";
import taskReducer from "./tasks"
import { configureStore } from "@reduxjs/toolkit";
import log from "../middleware/log";

const store = configureStore({reducer: {
    tasks: taskReducer,
    employees: employeesReducer},
middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), log]
})

export default store