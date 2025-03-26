"use client"
import React, { useState } from 'react';
import InputField from '@/components/InputField';
import TodoList from '@/components/TodoList';
import { Todo } from '@/models/models';
import { Neucha } from 'next/font/google';

const neucha = Neucha({
  weight: '400',
  subsets: ['latin'],
});

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todosarray, setTodosarray] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo.trim()) {
      setTodosarray([
        ...todosarray, 
        {
          id: Date.now(),
          todo: todo.trim(),
          isDone: false
        }
      ]);
      setTodo(""); // Clear input after adding
    }
  };

  return (
    <div className={`${neucha.className} min-h-screen bg-gray-100 py-10`}>
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold mb-8 text-blue-600">Taskify</h1>
        <InputField 
          todo={todo} 
          settodo={setTodo} 
          handleadd={handleAdd} 
        />
        <TodoList 
          todosarray={todosarray} 
          settodosarray={setTodosarray} 
        />
      </div>
    </div>
  );
};

export default App;
