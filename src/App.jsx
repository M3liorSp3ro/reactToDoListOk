import React from 'react'
import Header from './Header/Header'
import Tasks from './Tasks/Tasks'

const App = () => {
  return (
    <div className="todo">
      <Header />
      <div className="todo__tasks">
        <Tasks />
      </div>
    </div>
  )
}

export default App
