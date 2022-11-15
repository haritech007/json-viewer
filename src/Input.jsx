import React from 'react';

const Input = ({ onEnter }) => {

  const handleKeyup = (e) => {
    if (e.keyCode === 13) {
      const value = e.target.value || "";
      if (value.trim() === "") {
        alert("Please enter a valid REST API URL")
      } else {
        onEnter(e.target.value);
      }
    }
  };

  return (
    <div className='urlinput__placeholder'>
      <input autoFocus className="urlinput" type="text" placeholder="Eg. https://dummyjson.com/products" onKeyUp={handleKeyup} />
    </div>
  )
};

export default Input