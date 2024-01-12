import React, { useContext } from "react";
import DataContext from "./context/DataContext";
import History from "./History";
const HistoryStack = () => {
  const { history } = useContext(DataContext);
  return history && <History />;
};

export default HistoryStack;
