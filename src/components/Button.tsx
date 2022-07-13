import React from "react";
interface ICountText {
  label: string;
  handleCounter:()=>void;
}
const Button = ({ label ,handleCounter}: ICountText) => {
  return <button onClick={handleCounter}>{label}</button>;
};

export default Button;
