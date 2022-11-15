import React from 'react'

const NodeKey = ({ label, toggle, toggleable }) => {
  const className = ['node__key'];

  if (toggleable) {
    className.push("node__toggled-key")
  }
  if (toggle) {
    className.push("node__toggled-key--active")
  }

  return (
    <span className={className.join(" ")}>{label}: </span>
  )
}

export default NodeKey