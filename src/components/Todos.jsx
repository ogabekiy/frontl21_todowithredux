import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDone, deleteToDo } from "../slices/todoSlice";

export default function Todos() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      {todos.length === 0 ? (
        <div className="text-center">
          <p className="text-black opacity-45 text-xl font-semibold">No tasks yet (: </p>
          
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`p-4 rounded-xl border-e shadow-lg transition-all ${
                todo.done
                  ? "bg-green-100 border-l-4 border-gray-500"
                  : "bg-white border-l-2 border-gray-300"
              }`}
            >
              <div className="mb-4">
                <h3
                  className={`text-xl font-bold ${
                    todo.done ? "line-through text-gray-500" : "text-gray-800"
                  }`}
                >
                  {todo.text}
                </h3>
                <p className="text-gray-600 text-sm">{todo.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => dispatch(getDone(todo.id))}
                  className={`flex items-center px-4 py-2 rounded-2xl text-base font-medium transition-all ${
                    todo.done
                      ? "bg-black text-white"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  {todo.done ? (
                    <>
                      <span>Undo</span>
                    </>
                  ) : (
                    <>
                      <span>Done</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => dispatch(deleteToDo(todo.id))}
                  className="flex items-center px-4 py-2 bg-black rounded-2xl text-white text-base font-medium hover:text-black hover:bg-red-500 transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
