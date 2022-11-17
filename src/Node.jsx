import { useId } from "react";
import NodeKey from "./NodeKey";
import NodeValue from "./NodeValue";
import NodeWrapper from "./NodeWrapper";

const Node = ({ data, search }) => {
  // console.log(data)
  const id = useId();

  return Object.entries(data).map((item, index) => {
    const [key, value] = item;

    if (typeof value === "object") {
      return (
        <div className="node" key={`${id}-${index}`}>
          <NodeWrapper search={search} label={key} value={value} />
        </div>
      )
    } else {
      // console.log(search)
      const searchedKey = search ? key.toString().toLowerCase().includes(search.toLowerCase()) : false;
      const searchedValue = search ? value.toString().toLowerCase().includes(search.toLowerCase()) : false;
      // console.log(searchedKey, searchedValue)
      return <div className={`node`} key={`${id}-${index}`}>
        <NodeKey label={key} searched={searchedKey} />
        <NodeValue value={value} searched={searchedValue} />
      </div>
    }
  });
};
export default Node;