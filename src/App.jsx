import React, { useState } from 'react'
import Header from './components/Header'
import Todos from './components/Todos'
import AddModal from './components/AddModal'

export default function App() {
  const [isModalOpen,setIsModalOpen] = useState(false)

  return (
    <div>
      <Header onAddClick={() => setIsModalOpen(true)}/>
      <Todos/>
      <AddModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
