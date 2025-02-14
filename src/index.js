import store from "./store/configureStore";
import { fetchTasks } from "./store/tasks";

store.dispatch({
  type: "apiRequest",
  payload: {
    url: "/tasks",
    method: "GET",
    onSuccess: "getTasks",
    onError: "SHOW_ERROR",
  },
});

// store.dispatch(fetchTasks());
