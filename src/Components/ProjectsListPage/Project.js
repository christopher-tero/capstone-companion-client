import React from 'react'
import './Project.css'

export default function Project(props) {
  const cutDescription = props.description.replace(/^(.{100}[^\s]*).*/, "$1")

  return (
    <div className="project-card">
      <h4>{props.title}</h4>
      <p>{cutDescription}...</p>
    </div>
  )
}
