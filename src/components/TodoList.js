import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {

        const newTodo = [todo, ...todos]

        setTodos(newTodo)
    }

    const deleteTodo = id => {
        const removeTodo = [...todos].filter(todo => todo.id !== id);

        setTodos(removeTodo);
    }

    const renameTodo = (todoId, newValue) => {

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>Todo App</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} renameTodo={renameTodo} />
        </div>
    )
}

export default TodoList
