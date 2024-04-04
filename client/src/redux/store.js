import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./todoList";
export const store = configureStore({
  // creating redux store to store all reducers.
  reducer: {
    todoList: todoListReducer,
  },
});
