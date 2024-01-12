import React, { useContext } from "react";
import DataContext from "./context/DataContext";
import { FaHistory, FaBackspace } from "react-icons/fa";
const Nav = () => {
  const { mode, setMode, history, setHistory, handleSubmit1, val, setVal } =
    useContext(DataContext);
  return (
    <div className="NavContainer">
      {mode && (
        <button
          type="button"
          onClick={() => {
            setMode(false);
          }}
        >
          Scientific Mode
        </button>
      )}
      {!mode && (
        <button
          type="button"
          onClick={() => {
            setMode(true);
          }}
        >
          Normal Mode
        </button>
      )}
      <button type="button" className="button" onClick={handleSubmit1}>
        Ans
      </button>
      <FaHistory
        type="button"
        className="icon"
        onClick={() => setHistory(!history)}
      />
      <FaBackspace
        type="button"
        className="icon"
        onClick={() => {
          if (val === "") return;
          else setVal(val.slice(0, val.length - 1));
        }}
      />
    </div>
  );
};

export default Nav;
