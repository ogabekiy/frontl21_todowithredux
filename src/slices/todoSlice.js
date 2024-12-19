import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: []
  },
  reducers: {
    addToDo: (state, action) => {
      const { text, description } = action.payload; 
      state.todos.push({
        id: Date.now(),
        text,
        description,
        done: false
      });
    },
    getDone: (state, action) => {
      const toDo = state.todos.find(todo => todo.id === action.payload);
      if (toDo) {
        toDo.done = !toDo.done; 
      }
    },
    deleteToDo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { addToDo, getDone, deleteToDo } = todoSlice.actions;
export default todoSlice.reducer;
