import React, { useContext } from "react";
import DataContext from "./context/DataContext";
import { BsArrowLeftRight } from "react-icons/bs";
const ScientificBtn = () => {
  const { page1, setPage1, val, setVal, angle, setAngle } =
    useContext(DataContext);
  var list1 = [
    "sqrt(",
    "sin(",
    "cos(",
    "tan(",
    "ln(",
    "log10(",
    "1/x",
    "e^x",
    "x^2",
    "x^y",
    "abs(",
    "pi",
    "e",
  ];
  var list2 = [
    "cbrt(",
    "asin(",
    "acos(",
    "atan(",
    "sinh(",
    "cosh(",
    "tanh(",
    "asinh(",
    "acosh(",
    "atanh(",
    "2^(",
    "cube(",
    "fact(",
  ];
  const handleClick = (key) => {
    switch (key) {
      case "ln(":
        setVal(val + "log(");
        break;
      case "1/x":
        setVal(val + "^(-1)");
        break;
      case "sin(":
        if (angle === "deg") setVal(val + key);
        else setVal(val + "sin((pi/180)*");
        break;
      case "cos(":
        if (angle === "deg") setVal(val + key);
        else setVal(val + "cos((pi/180)*");
        break;
      case "tan(":
        if (angle === "deg") setVal(val + key);
        else setVal(val + "tan((pi/180)*");
        break;
      case "atan(":
        if (angle === "deg") setVal(val + key);
        else setVal(val + "(180/pi)*atan(");
        break;
      case "asin(":
        if (angle === "deg") setVal(val + key);
        else setVal(val + "(180/pi)*asin(");
        break;
      case "acos(":
        if (angle === "deg") setVal(val + key);
        else setVal(val + "(180/pi)*acos(");
        break;
      case "e^x":
        setVal(val + "e^(");
        break;
      case "x^2":
        setVal(val + "^(2)");
        break;
      case "x^y":
        setVal(val + "^(");
        break;
      case "2^(":
        setVal(val + "2^(");
        break;
      case "fact(":
        setVal(val + "factorial(");
        break;
      default:
        setVal(val + key);
    }
  };
  return (
    <div className="BtnContainer">
      <BsArrowLeftRight className="icon" onClick={() => setPage1(!page1)} />
      <button
        onClick={() => (angle === "deg" ? setAngle("rad") : setAngle("deg"))}
      >
        {angle}
      </button>
      {page1 &&
        list1.map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
      {!page1 &&
        list2.map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
    </div>
  );
};

export default ScientificBtn;
