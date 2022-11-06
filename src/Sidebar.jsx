import React from 'react'

const Sidebar = ({ copyright, children }) => {
  return (
    <div className='sidebar'>
      <h1 style={{ margin: '0 0 0 0' }}>Backtrace Assigment</h1>
      <p>Unstructured JSON viewer assignment given by Saucelabs.</p>
      <div>{children}</div>
      <div className='sidebar--copyright'>{copyright}</div>
    </div>
  )
}

export default Sidebar