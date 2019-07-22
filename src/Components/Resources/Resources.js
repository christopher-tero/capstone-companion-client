import React from 'react'

import './Resources.css'

export default function Resources() {
  return(
    <div className="container">
      <h3>List of Resources</h3>
      <div className="resources">
        <p><a href="https://developer.mozilla.org/en-US/">MDN Docs</a> - Excellent reference for Javascript, CSS, and HTML</p>
        <p><a href="https://css-tricks.com/">CSS Tricks</a> - A very practical guide for learning CSS</p>
        <p><a href="https://reactjs.org/">React.org</a> - The official React docs; some of the best framework docs ever!</p>
      </div>
    </div>
  )
}
