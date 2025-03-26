"use client"
import React from "react";

interface Props {
    todo: string;
    settodo: React.Dispatch<React.SetStateAction<string>>;
    handleadd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, settodo, handleadd }) => {
  return (
    <form 
      onSubmit={handleadd} 
      className="flex w-[90%] max-w-xl mx-auto bg-white p-2 rounded-full shadow-md transition-all duration-200 focus-within:shadow-lg"
    >
      <input
        type="text"
        placeholder="Enter a task..."
        className="w-full px-6 py-3 text-lg border-none outline-none rounded-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />
      <button
        type="submit"
        className="ml-3 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full text-lg transition-all duration-200 hover:bg-blue-600 active:scale-95 shadow-md"
      >
        Add
      </button>
    </form>
  );
};

export default InputField;
