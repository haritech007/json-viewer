import React from 'react'

const Recents = ({ recents, onRecentClick }) => {
  return (
    <ul className='recent'>
      {
        recents.map((item, index) => <li className="recent__links" key={index} onClick={() => onRecentClick(item)}>{item}</li>)
      }
    </ul>
  )
}

export default Recents