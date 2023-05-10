import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../action/action_types";

const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      //todo add
      return [...state, action.payload];
    case DELETE_TODO:
      //todo delete
      const newState = state.filter(
        (todo) => todo.id !== action.payload
      );
      return newState;
      
    case UPDATE_TODO:
      //todo update
      const updateState = state.map(todo=>{
        if(todo.id===action.payload.todoId){
          return (todo.title = action.payload.todo.title,
          todo.description = action.payload.todo.description)
        }
      })
      return updateState;
    default:
      return state;
  }
}
