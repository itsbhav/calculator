import React, { useState, useContext } from "react";
import DataContext from "./context/DataContext";
const History = () => {
  const { setVal } = useContext(DataContext);
  const data = JSON.parse(localStorage.getItem("history"));
  const [his, setHis] = useState(data);
  const size = his.length;
  var s = size;
  return (
    <div className="History">
      {size > 0 &&
        his.map((item) => (
          <div
            key={s--}
            onClick={(e) => {
              setVal(item);
            }}
            className="button"
          >
            {item}
          </div>
        ))}
      {!size && <p style={{ fontSize: "3rem" }}>No History Available</p>}
      {size > 0 && (
        <button
          className="icon"
          onClick={() => {
            localStorage.setItem("history", JSON.stringify([]));
            setHis([]);
          }}
        >
          Clear History
        </button>
      )}
    </div>
  );
};

export default History;
