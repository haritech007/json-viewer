import React from 'react'

const NodeKey = ({ label, toggle, toggleable, searched }) => {
  const className = ['node__key'];

  if (toggleable) {
    className.push("node__toggled-key")
  }
  if (toggle) {
    className.push("node__toggled-key--active")
  }
  if (searched) {
    className.push("node--highlighted")
  }

  return (
    <span className={className.join(" ")}>{label}: </span>
  )
}

export default NodeKey