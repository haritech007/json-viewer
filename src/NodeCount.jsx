import React from 'react'

const NodeCount = ({ value }) => {
  const nodeType = Array.isArray(value) ? 'array' : 'object';
  return (
    <i className="node--count">{(nodeType === 'array' ? value.length : Object.keys(value).length)}</i>
  )
}

export default NodeCount