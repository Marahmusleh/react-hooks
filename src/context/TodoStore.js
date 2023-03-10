import React, { createContext, useReducer, useEffect } from "react";

export const Store = createContext();

const reducer = (state,action) =>{
  switch(action.type){
    case 'AddToDo':{
      if(action.payload==='') return state;
      return{
        ...state,
        todos:[action.payload,...state.todos],
      }
    }
    case 'DeleteTask':{
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }
    case 'CompletedTask':{
      return{
        ...state,
        todos:state.todos.map((todo)=>{
          if(todo.id===action.payload.id){
            // make true is completed 
            todo.isCompleted=!action.payload.isCompleted;
          }
          return todo;
        }),
      }
    }
    default:
      break;
  }
  return state;
}

const initialState = {
  todos:JSON.parse(localStorage.getItem('todo'))?JSON.parse(localStorage.getItem('todo')):[]
};

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state.todos));
  }, [state.todos]);


  return <Store.Provider value={value}>{children}</Store.Provider>;
}
