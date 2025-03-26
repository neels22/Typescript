"use client"
import React from 'react';
import { Todo } from '@/models/models';

interface TodoListProps {
  todosarray: Todo[];
  settodosarray: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todosarray, settodosarray }) => {
  const handleDone = (id: number) => {
    settodosarray(
      todosarray.map((todo) => 
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    settodosarray(todosarray.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todos-container flex flex-col items-center w-full max-w-xl mx-auto mt-6 space-y-4">
      {todosarray.map((todo) => (
        <div 
          key={todo.id} 
          className={`flex items-center w-full p-4 bg-white rounded-lg shadow-md ${todo.isDone ? 'line-through text-gray-500' : ''}`}
        >
          <span className="flex-grow">{todo.todo}</span>
          <div className="space-x-2">
            <button 
              onClick={() => handleDone(todo.id)}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              {todo.isDone ? 'Undo' : 'Done'}
            </button>
            <button 
              onClick={() => handleDelete(todo.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
