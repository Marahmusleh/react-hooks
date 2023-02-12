import React, { useState, useContext, useEffect } from 'react';
import ShowTodo from './ShowTodo';
import { v4 as uuidv4 } from 'uuid';
import { Button, Form, Input, message, Space } from 'antd';

import { Store } from '../context/TodoStore';

const AddToDo = () => {

  const [form] = Form.useForm();

  const onFinish = () => {
    message.success('Submit success!');
    if (taskValue === '') return;
    dispatch({ type: 'AddToDo', payload: { id: uuidv4(), task: taskValue, isCompleted: false } });
    setTaskValue('');
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };


  const { state, dispatch } = useContext(Store);
  const [taskValue, setTaskValue] = useState('');


  return (
    <div className='add-task'>
      <div className='top-section'>
        <Form
          form={form}
          layout="inline"
          name="horizontal_login"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="taskValue"
            label="THINGS TO DO"
          >
            <Input onChange={(e) => setTaskValue(e.target.value)} placeholder="Enter your daily task" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Task
            </Button>
          </Form.Item>
        </Form>
      </div>
      <ShowTodo />
    </div>
  )
}

export default AddToDo;