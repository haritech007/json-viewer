import React from 'react';
import Node from './Node';

const JsonViewer = ({ json, loading, search }) => {
  return (
    <div className="jsonviewer code">
      {
        loading ? <>Loading...</> : <Node search={search} data={json} />
      }
    </div>
  )
}

export default JsonViewer