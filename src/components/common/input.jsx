import React from "react";

const Input = ({ name, value, label, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        value={value} // the form input have its own state,this is is to convert it to a controlled component
        onChange={onChange}
        name={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
