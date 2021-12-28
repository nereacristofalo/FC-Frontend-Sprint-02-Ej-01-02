import React from 'react';
import './FormInput.css';

const FormInput = ({ label, placeholder, type }) => {
  return (
    <label className="form-item form-input">
      {label}
      <input placeholder={placeholder} type={type} />
    </label>
  );
};

export default FormInput;
