import employeesReducer from "./employees";
import taskReducer from "./tasks"
import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger";

const store = configureStore({reducer: {
    tasks: taskReducer,
    employees: employeesReducer},
middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger]
})

export default store