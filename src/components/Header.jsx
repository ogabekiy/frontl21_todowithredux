import React from 'react'

export default function Header({onAddClick}) {
  return (
    <header className='flex justify-around py-4 shadow-lg '>
        <h2 className='text-black  text-2xl font-bold'>ToDoList</h2>
        <button onClick={onAddClick} className='bg-black font-bold text-white px-4 shadow-md rounded-2xl hover:scale-105'>
            Add Task+
        </button>
    </header>
  )
}
