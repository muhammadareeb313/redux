export default function TodoReducer(state = { todos: [] }, action) {
  switch (action.type) {
    case "TODO_CREATED": {
      if(action.payload){
        
        const newState = { ...state, todos: [...state.todos, action.payload] };
        console.log(newState);
        
        return newState;
      }
      
    }
    case "TODO_DELETED":{ 
      let prevTodos = state.todos;
      let updatedTodos = prevTodos.filter(
        (todo, index) => index !== action.payload
      );
      const newState = { ...state, todos: updatedTodos };
      return newState;
    }
    case "TODO_LINE":{ 
      let prevTodos = state.todos;
         prevTodos[action.payload.ix].line = !action.payload.line
        console.log(prevTodos); 
        const newState = { ...state, todos: prevTodos };
        return newState;
      // else{
      //   const newState = { ...state, todos: prevTodos };
      //   return newState;
      
    }
    case "TODO_UPDATED": {
      let prevTodos = state.todos;
      console.log(prevTodos);
      if(action.payload.update){
        prevTodos[action.payload.ix].data = action.payload.update
        console.log(prevTodos); 
        const newState = { ...state, todos: prevTodos };
        return newState;
      }else{
        const newState = { ...state, todos: prevTodos };
        return newState;
      }
      
           
}   default:
      return state;
  }
}


// if(index === action.payload.ix){
//   let todos = todo
   
//     todos === action.payload.update

//   }


// }