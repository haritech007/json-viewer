import React from 'react'

const NodeCount = ({ value }) => {
  const nodeCount = Array.isArray(value) ? value.length : Object.keys(value).length;

  return (
    <i className="node__count">{nodeCount}</i>
  )
}

export default NodeCount