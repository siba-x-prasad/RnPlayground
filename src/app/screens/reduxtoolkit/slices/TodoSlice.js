import { createSlice } from '@reduxjs/toolkit'

let idCount = 0;

const todosSlice = createSlice({
  name: 'todos',
  initialState: [{id : 0, name : 'title', amount : 0 }],
  reducers: {
    todoAdded(state, action) {
      console.log('State title '+ action.payload.name+' id '+ action.payload.amount);
      console.log('Payload '+action.payload);
      idCount = idCount+1;
      state.push({
        id: idCount,
        name: action.payload.name,
        amount:  action.payload.amount
      });
      idCount = idCount+1;
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    }
  }
})

export const { todoAdded, todoToggled } = todosSlice.actions
export default todosSlice.reducer