import React from 'react'

const NodeTypeSymbol = ({ value, position }) => {
  const nodeType = Array.isArray(value) ? 'array' : 'object';
  return (
    <span className="node__wrapper-delimiter">{nodeType === 'array' ? (position === 'opening') ? '[' : ']' : (position === 'opening') ? '{' : '}'}</span>
  )
}

export default NodeTypeSymbol