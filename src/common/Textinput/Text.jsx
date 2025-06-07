import'./styletext.css';
import React from 'react';

export default function TextInput({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      placeholder="Enter Name"
      className="text-input"
    />
  );
}