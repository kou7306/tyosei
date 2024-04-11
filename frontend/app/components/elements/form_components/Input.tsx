import React from "react";

type InputProps = {
  type: string;
  name: string;
  value: string;
};

const Input: React.FC<InputProps> = ({ type, name, value }) => {
  return <input type={type} name={name} value={value} className="text-black" />;
};

export default Input;
