import React from 'react'

const NodeValue = ({ value }) => {
  const className = ['node--value']

  if (typeof value === "string") {
    className.push("node--value--string")
  } else if (typeof value === "number") {
    className.push("node--value--number")
  } else {
    className.push("node--value--boolean")
  }

  return (
    <span className={className.join(" ")}>{JSON.stringify(value)}</span>
  )
}

export default NodeValue