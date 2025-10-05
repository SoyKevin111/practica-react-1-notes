import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <input type="checkbox" className="h-4 w-4" {...props} />;
};
