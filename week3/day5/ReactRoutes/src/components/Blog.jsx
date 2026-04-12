import React from 'react'
import { Outlet, useNavigate, NavLink } from 'react-router-dom'
import './Blog.css'

const Blog = () => {

  const navigate = useNavigate()

  return (
    <div className="blog-container">
      <div className="blog-card">
        <h1>Blog Page 📝</h1>
        <p>Explore different sections of the blog</p>

        <div className="blog-links">
          <NavLink to="career">Career</NavLink>
          <NavLink to="myprojects">My Projects</NavLink>
        </div>
        <button 
          className="blog-btn"
          onClick={() => navigate('/about')}
        >
          Go To About Page
        </button>

        <hr />

        <div className="blog-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Blog