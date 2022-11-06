import React from 'react';
import Node from './Node';

const JsonViewer = ({ json, loading }) => {
  return (
    <div className="jsonviewer code">
      {
        loading ? <>Loading...</> : <Node data={json} />
      }
    </div>
  )
}

export default JsonViewer