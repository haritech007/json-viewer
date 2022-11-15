import { useId } from "react";
import NodeKey from "./NodeKey";
import NodeValue from "./NodeValue";
import NodeWrapper from "./NodeWrapper";

const Node = ({ data }) => {
  const id = useId();

  return Object.entries(data).map((item, index) => {
    const [key, value] = item;

    if (typeof value === "object") {
      return (
        <div className="node" key={`${id}-${index}`}>
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