import { addEmployee } from "./store/employees";
import store from "./store/configureStore";

store.dispatch(addEmployee({name: "Cristina"}))

//Error example
store.dispatch({type: "SHOW_ERROR", payload: {error: "User not found"} })
