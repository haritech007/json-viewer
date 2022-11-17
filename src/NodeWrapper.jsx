import React, { useState } from 'react'
import NodeKey from "./NodeKey";
import NodeCount from "./NodeCount";
import NodeTypeSymbol from "./NodeTypeSymbol";
import Node from './Node';

const NodeWrapper = ({ label, value, search }) => {
  const [toggle, setToggle] = useState(false);
  const searchedKey = search ? label.toString().toLowerCase().includes(search.toLowerCase()) : false;
  return (
    <>
      <div className="node__toggle node__wrapper" onClick={(e) => { e.stopPropagation(); setToggle(!toggle) }}>
        <NodeKey label={label} toggle={toggle} toggleable searched={searchedKey} />
        {!toggle && <NodeTypeSymbol value={value} position="opening" />}
        {!toggle && <NodeCount value={value} />}
        {!toggle && <NodeTypeSymbol value={value} position="closing" />}
      </div>
      {
        toggle && <div className='node__wrapper'>
          <NodeTypeSymbol value={value} position="opening" />
          <Node data={value} search={search} />
          <NodeTypeSymbol value={value} position="closing" />
        </div>
      }
    </>
  )
}

export default NodeWrapper