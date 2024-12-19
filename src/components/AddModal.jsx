import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../slices/todoSlice";

export default function AddModal({ isOpen, onClose }) {
  const [task, setTask] = useState(""); 
  const [description, setDescription] = useState(""); 
  const dispatch = useDispatch();

  if (!isOpen) return null; 

  const handleSave = () => {
    if (task.trim() && description.trim()) {
      dispatch(addToDo({ text: task, description })); 
      setTask(""); 
      setDescription("");
      onClose(); 
    }
  };

  return (
    <div className="fixed inset-0  bg-slate-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Add a New Task</h2>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="task name..."
          className="w-full border px-3 py-2 rounded mb-4"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description..."
          className="w-full border px-3 py-2 rounded mb-4"
        ></textarea>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
