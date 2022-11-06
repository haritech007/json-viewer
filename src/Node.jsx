import { useState, useId } from "react";
import NodeKey from "./NodeKey";
import NodeCount from "./NodeCount";
import NodeTypeSymbol from "./NodeTypeSymbol";
import NodeValue from "./NodeValue";
import NodeWrapper from "./NodeWrapper";

const Node = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  const id = useId();

  return Object.entries(data).map((item, index) => {
    const [key, value] = item;

    if (typeof value === "object") {
      const nodeType = Array.isArray(value) ? 'array' : 'object';
      return (
        <div className="node" key={`${id}-${index}`}>
          {/* <div className="node--toggle" onClick={(e) => { e.stopPropagation(); setToggle(!toggle) }}>
            <NodeKey label={key} toggle={toggle} toggleable />
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
          } */}
          <NodeWrapper label={key} value={value} />
        </div>
      )
    } else {
      return <div className="node" key={`${id}-${index}`}>
        <NodeKey label={key} />
        <NodeValue value={value} />
      </div>
    }
  });
};
export default Node;