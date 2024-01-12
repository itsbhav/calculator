import React, { useContext } from "react";
import DataContext from "./context/DataContext";
import NormalBtn from "./NormalBtn";
const NoramlCalc = () => {
  const { history, mode } = useContext(DataContext);
  return !history && mode && <NormalBtn />;
};

export default NoramlCalc;
