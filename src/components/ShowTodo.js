import React,{ useContext } from 'react';
import { Store } from '../context/TodoStore';


const ShowTodo = () => {
  const {state,dispatch} = useContext(Store);
 
  return (
    <div className='bottom-section'>
      {state.todos.length>0?
        state.todos.map((todo)=>{
          return(
            <div className='single-task' key={todo.id}>
              <input 
                type="checkbox" 
                defaultChecked={todo.isCompleted?true:false}
                onClick={()=>dispatch({type: 'CompletedTask',payload:todo})}
              />
              <p>{todo.task}</p>
              <div className='icon-wrap'>
                <i className="fa-solid fa-trash" onClick={()=>dispatch({type: 'DeleteTask',payload:todo})}></i>
              </div>
            </div>
          )
        }):
        <h1>Add your daily task</h1>
      }
    </div>
  )
}

export default ShowTodo;