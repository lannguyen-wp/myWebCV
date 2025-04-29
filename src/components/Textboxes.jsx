import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const Textbox_base = ({ value, onChange, placeholder }) => {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ height: "400px" }}
    />
  );
};

export default Textbox_base;

