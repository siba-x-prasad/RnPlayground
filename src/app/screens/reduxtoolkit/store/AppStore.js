import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from '../slices/TodoSlice';
import counterSlice from '../slices/counterSlice';

export default configureStore({
  reducer: {
    todos: TodoSlice,
    count: counterSlice
  }
});