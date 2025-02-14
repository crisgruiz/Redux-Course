import employeesReducer from "./employees";
import taskReducer from "./tasks";
import { configureStore } from "@reduxjs/toolkit";
import error from "./middleware/error";
import api from "./middleware/api";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeesReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api, error],
});

export default store;
