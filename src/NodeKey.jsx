import React from 'react'

const NodeKey = ({ label, toggle, toggleable }) => {
  const className = ['node--key'];

  if (toggleable) {
    className.push("node--toggled--key")
  }
  if (toggle) {
    className.push("node--toggled--key--active")
  }

  return (
    <span className={className.join(" ")}>{label}: </span>
  )
}

export default NodeKey