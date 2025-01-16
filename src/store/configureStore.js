import reducer from "./employees";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({reducer})

export default store