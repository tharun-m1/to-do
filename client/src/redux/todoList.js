import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("list")) || [],
  // value is derived from localStorage if it is empty then empty array is assigned
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // function to add task
      const localData = JSON.parse(localStorage.getItem("list")) || []; // value is derived from localStorage if it is empty then empty array is assigned
      localData.push(action.payload); // adding task
      localStorage.setItem("list", JSON.stringify(localData)); // storing data in localstorage to persist between reloads.
      state.value = localData; // setting state so than UI updates
    },
    /* Delete Task
          -index of task is received in action.payload
          -removing that index item using splice array method.
          -setting data to localStorage.
          -updating the state
     */
    deleteTask: (state, action) => {
      // function to delete task.
      const localData = JSON.parse(localStorage.getItem("list"));
      localData.splice(action.payload, 1);
      localStorage.setItem("list", JSON.stringify(localData));
      state.value = localData;
    },
    /* Mark Task
          -index of task is received in action.payload
          -toggling the status of the task.
          -setting data to localStorage.
          -updating the state
     */
    markTask: (state, action) => {
      const localData = JSON.parse(localStorage.getItem("list"));
      localData[action.payload].status = !localData[action.payload].status;
      localStorage.setItem("list", JSON.stringify(localData));
      state.value = localData;
    },
  },
});

export const { addTask, deleteTask, markTask } = todoSlice.actions;
export default todoSlice.reducer;
