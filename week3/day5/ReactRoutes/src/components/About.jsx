import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About Us</h1>
        <p>
          This is a React Router demo project where you are learning navigation,
          dynamic routing, and nested routes.
        </p>

        <h3>What You’ll Learn 🚀</h3>
        <ul>
          <li>Routing in React</li>
          <li>Navigation using useNavigate</li>
          <li>Dynamic Routes</li>
          <li>Nested Routes</li>
        </ul>
      </div>
    </div>
  )
}

export default About