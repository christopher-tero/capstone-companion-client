import React from 'react'
import { BrowserRouter as Route, Link } from "react-router-dom";
import './Header.css'

export default function Project() {
  return (
    <nav className="header">
      <h4 className="nav-logo logo">Capstone Companion</h4>
      <div className="nav-links">
        <span><Link to="/home">Home</Link></span>
        <span><Link to="/projects/">Projects</Link></span>
        <span><Link to="/resources/">Resources</Link></span>
        <span><Link to="/">Log Out</Link></span>
      </div>
    </nav>
  )
}
