import React from 'react'
import { BrowserRouter as Route, Link } from "react-router-dom";
import './Footer.css'

export default function Footer() {
  return(
    <div id="footer">
      <Link to="/about" id="footer-link">About Us</Link>
    </div>
  )
}
