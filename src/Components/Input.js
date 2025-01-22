import React from "react";

const Input = ({ placeholder,value,onChange,name}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border p-2 rounded-2xl"
      name={name}
    />
  );
};

export default Input;
