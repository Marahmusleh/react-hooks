import React, { useContext } from 'react';
import { Store } from '../context/TodoStore';
import { Card } from 'antd';

const ShowTodo = () => {
  const { state, dispatch } = useContext(Store);

  return (
    <div className='bottom-section'>
      <Card title="My Tasks">
         { state.todos.map((todo, key) => {
            return (
              <Card type="inner" title={`Task Number ${key + 1} ...........................................`} 
              extra={[
              <i className="fa-solid fa-trash" onClick={() => dispatch({ type: 'DeleteTask', payload: todo })}></i>,
              <span>&nbsp;</span>,
              <input
                type="checkbox"
                defaultChecked={todo.isCompleted ? true : false}
                onClick={() => dispatch({ type: 'CompletedTask', payload: todo })}
              />]}>

                {todo.task}
              </Card>
            )
          }) 
        }
      </Card>

    </div>
  )
}

export default ShowTodo;