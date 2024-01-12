import React, { useContext } from "react";
import DataContext from "./context/DataContext";
const NormalBtn = () => {
  const { handleSubmit, val, setVal } = useContext(DataContext);
  var list = [
    ".",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "(",
    "0",
    ")",
  ];
  return (
    <div className="BtnContainer">
      <button type="button" onClick={() => setVal("")}>
        C
      </button>
      {list.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() =>
            item !== "%" ? setVal(val + `${item}`) : setVal(val + "*0.01*")
          }
        >
          {item}
        </button>
      ))}
      <button type="button" onClick={handleSubmit}>
        =
      </button>
    </div>
  );
};

export default NormalBtn;
