import React, { useState } from 'react'
import NodeKey from "./NodeKey";
import NodeCount from "./NodeCount";
import NodeTypeSymbol from "./NodeTypeSymbol";
import Node from './Node';

const NodeWrapper = ({ label, value }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="node__toggle" onClick={(e) => { e.stopPropagation(); setToggle(!toggle) }}>
        <NodeKey label={label} toggle={toggle} toggleable />
        {!toggle && <NodeTypeSymbol value={value} position="opening" />}
        {!toggle && <NodeCount value={value} />}
        {!toggle && <NodeTypeSymbol value={value} position="closing" />}
      </div>
      {
        toggle && <div>
          <NodeTypeSymbol value={value} position="opening" />
          <Node data={value} />
          <NodeTypeSymbol value={value} position="closing" />
        </div>
      }
    </>
  )
}

export default NodeWrapper