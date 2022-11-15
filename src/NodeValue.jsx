import React from 'react'

const NodeValue = ({ value }) => {
  const className = ['node__value']

  if (typeof value === "string") {
    className.push("node__value--string")
  } else if (typeof value === "number") {
    className.push("node__value--number")
  } else {
    className.push("node__value--boolean")
  }

  return (
    <span className={className.join(" ")}>{JSON.stringify(value)}</span>
  )
}

export default NodeValue