import React from "react";

const Input = ({ placeholder,value,onChange,type,accept}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      accept={accept}
      className="border p-2 rounded-xl"
    />
  );
};

export default Input;

