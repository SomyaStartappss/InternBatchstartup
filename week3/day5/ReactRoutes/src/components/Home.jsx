import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/about')
  }

  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Welcome 🚀</h1>
        <p>Learn React Routing with a beautiful UI</p>

        <button 
          className="home-btn"
          onClick={handleNavigate}
        >
          Go To About Page
        </button>
      </div>
    </div>
  )
}

export default Home