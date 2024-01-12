import React, { useContext } from "react";
import DataContext from "./context/DataContext";
import NormalBtn from "./NormalBtn";
import ScientificBtn from "./ScientificBtn";
const ScientificCalc = () => {
  const { history, mode } = useContext(DataContext);
  return (
    !history &&
    !mode && (
      <div style={{ display: "flex" }}>
        <ScientificBtn />
        <NormalBtn />
      </div>
    )
  );
};

export default ScientificCalc;
