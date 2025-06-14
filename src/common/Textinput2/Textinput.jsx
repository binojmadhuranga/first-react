import "./styletext.css";
import React from 'react';


export default function TextInput2({ value, onChange, placeholder }) {

    // function onChange(e) {
    //    onChange={onChange}
    // }



  return (
    <input
      onChange={onChange}
      type="text"
      placeholder= {placeholder}
      className="text-input"
      value={value}


    />
  );
}