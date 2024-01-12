import { createContext, useState, useEffect } from "react";
import { create, all } from "mathjs";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  //   mathjs setup
  const config = {};
  const math = create(all, config);

  // security enhancement mathjs
  const limitedEvaluate = math.evaluate;
  math.import(
    {
      import: function () {
        throw new Error("Function import is disabled");
      },
      createUnit: function () {
        throw new Error("Function createUnit is disabled");
      },
      evaluate: function () {
        throw new Error("Function evaluate is disabled");
      },
      parse: function () {
        throw new Error("Function parse is disabled");
      },
      simplify: function () {
        throw new Error("Function simplify is disabled");
      },
      derivative: function () {
        throw new Error("Function derivative is disabled");
      },
    },
    { override: true }
  );

  // useStates
  const [mode, setMode] = useState(false);
  const [page1, setPage1] = useState(true);
  const [history, setHistory] = useState(false);
  const [val, setVal] = useState("");
  const [angle, setAngle] = useState("deg");
  const [out, setOut] = useState("");

  // useEffects
  useEffect(() => {
    if (!localStorage.getItem("history")) {
      localStorage.setItem("history", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    setOut("");
  }, [val]);

  useEffect(() => {
    const x = document.getElementById("App");
    if (!mode) x.classList.add("wide-mode");
    else x.classList.remove("wide-mode");
  }, [mode]);

  // Functions
  const handleSubmit = () => {
    try {
      const ans = limitedEvaluate(val);
      setOut(ans);
      var data = JSON.parse(localStorage.getItem("history"));
      data = [val, ...data];
      localStorage.setItem("history", JSON.stringify(data));
    } catch (err) {
      setOut(err.message);
      return;
    }
  };

  const handleSubmit1 = () => {
    try {
      const ans = limitedEvaluate(val);
      setVal(`${ans}`);
      var data = JSON.parse(localStorage.getItem("history"));
      data = [val, ...data];
      localStorage.setItem("history", JSON.stringify(data));
    } catch (err) {
      setOut(err.message);
    }
  };

  return (
    <DataContext.Provider
      value={{
        mode,
        setMode,
        page1,
        setPage1,
        history,
        setHistory,
        val,
        setVal,
        angle,
        setAngle,
        out,
        setOut,
        handleSubmit,
        handleSubmit1,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
