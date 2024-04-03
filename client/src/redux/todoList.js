import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("list")) || [],
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const localData = JSON.parse(localStorage.getItem("list")) || [];
      localData.push(action.payload);
      localStorage.setItem("list", JSON.stringify(localData));
      state.value = localData;
    },
    deleteTask: (state, action) => {
      const localData = JSON.parse(localStorage.getItem("list"));
      localData.splice(action.payload, 1);
      localStorage.setItem("list", JSON.stringify(localData));
      state.value = localData;
    },
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
