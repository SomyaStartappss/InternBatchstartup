import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  const handleAdd = (e) => {
      e.preventDefault()

    if (task.trim() === "") {
      return
    }
    else {
      setTodos([...todos, task])
      setTask("")
    }
  }
  return (
    <div className="container">
      <form onSubmit={handleAdd}>
        <h2>Todo-App</h2>
        <div className="Todo-box">
          <input onChange={(e) => setTask(e.target.value)} type="text" placeholder='Enter Your List...' value={task} />
          <button type='submit'>Add</button>
        </div>

        <ul>
          {todos.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </form>
    </div>

  )
}

export default App