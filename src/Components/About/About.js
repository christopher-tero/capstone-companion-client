import React from 'react'
import '../../App.css'
import './About.css'

export default function About() {
  return(
    <div id="about">
      <h1>About <span className="logo">Capstone Companion</span></h1>
      <p>Capstone Companion is a product designed to help you plan, track, and
      ultimately complete your coding projects! With this app you can:</p>
      <ul>
        <li>Create new projects with detailed descriptions</li>
        <li>Edit notes to keep track of features you want to implement</li>
        <li>Keep track of progress with a checklist</li>
        <li>See how close you are to completing your project!</li>
      </ul>
      <p>We wish you success as you create amazing projects to impress your
      family, friends, co-workers, and potential employers!</p>
    </div>
  )
}
