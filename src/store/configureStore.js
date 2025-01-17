import employeesReducer from "./employees";
import taskReducer from "./tasks"
import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger";
import error from "../middleware/error";

const store = configureStore({reducer: {
    tasks: taskReducer,
    employees: employeesReducer},
middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger, error]
})

export default store