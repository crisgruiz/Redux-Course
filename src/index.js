import { addEmployee } from "./store/employees";
import store from "./store/configureStore";

store.dispatch(addEmployee({name: "Cristina"}))
