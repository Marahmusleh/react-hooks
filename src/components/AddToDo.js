import React,{ useState,useContext, useEffect } from 'react';
import ShowTodo from './ShowTodo';
import { v4 as uuidv4 } from 'uuid';

import { Store } from '../context/TodoStore';

const AddToDo = () => {

  const {state,dispatch} = useContext(Store);
  const [taskValue,setTaskValue] = useState('');


  const setToDo = () =>{
    if(taskValue==='') return;
    dispatch({type: 'AddToDo',payload:{id:uuidv4(),task:taskValue,isCompleted:false}});
    setTaskValue('');
  }



  return (
    <div className='add-task'>
     <div className='top-section'>
      <input 
        type="text" 
        autoComplete='off'
        placeholder='THINGS TO DO'
        value={taskValue}
        onChange={(e)=>setTaskValue(e.target.value)}
        id='input'
      />

        <button className='btn' onClick={setToDo}>
          <span>Add Task</span><i className="fa-solid fa-plus"></i>
        </button>
     </div>
      <ShowTodo />
    </div>
  )
}

export default AddToDo;