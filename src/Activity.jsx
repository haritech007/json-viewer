import React, { useEffect, useState, useRef } from 'react'

const Activity = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  // Handling search trigger which propagates search string to parent compent
  const handleKeyUp = e => {
    if (e.code === "Enter") {
      onSearch(search.trim());
    }
  };

  // Handling DOM keyup event for focusing search input field if user presses [ctrl + /] together.
  const inputRef = useRef(null);
  const handleDOMkeyup = e => {
    e.preventDefault();
    if (e.ctrlKey && e.code === "Slash") {
      inputRef.current.focus();
      if (search.trim().length) {
        inputRef.current.select();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", handleDOMkeyup);
    return () => document.removeEventListener("keyup", handleDOMkeyup);
  }, []);

  return (
    <div className='activity'>
      <input ref={inputRef} className='activity__search' type="text" onFocus={() => inputRef.current.select()} onKeyUp={handleKeyUp} onChange={handleChange} value={search} placeholder="Search in your JSON. Please [ ctrl + / ] to search." />
    </div>
  )
}

export default Activity;