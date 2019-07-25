import React from 'react'
import { BrowserRouter as Route, Link } from "react-router-dom";
import './Footer.css'

export default function Footer() {
  return(
    <div>
      <Link to="/about" id="footer">About Us</Link>
    </div>
  )
}
