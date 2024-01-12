import React, { useContext } from "react";
import DataContext from "./context/DataContext";
const Input = () => {
  const { val, out } = useContext(DataContext);
  return (
    <form className="screen">
      <label htmlFor="input">Input Expression</label>
      <input className="input" type="text" id="input" readOnly value={val} />
      <input className="input" type="text" value={out} readOnly />
    </form>
  );
};

export default Input;
