import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo({ todos, completeTodo, deleteTodo, renameTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    renameTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index} >

      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <AiFillDelete
          onClick={() => deleteTodo(todo.id)}
          className='delete-icon' />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon' />
      </div>

    </div>
  ));
}

export default Todo
