import React from 'react';

const Textbox_base = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="flex flex-grow"
      style={{ height: "auto", minHeight: "400px" }}
    />
  );
};

export default Textbox_base;

