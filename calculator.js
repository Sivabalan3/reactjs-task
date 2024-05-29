import React, { useState } from "react";
function App() {
const [inputs, setInputs] = useState({ number1: "", number2: "" });
 const [result, setResult] = useState({});
const onSubmit = (operation) => {
    const num1 = parseInt(inputs.number1);
    const num2 = parseInt(inputs.number2);
    let result;

    switch (operation) {
      case "addition":
        result = num1 + num2;
        break;
      case "subtraction":
        result = num1 - num2;
        break;
      case "multiplication":
        result = num1 * num2;
        break;
      case "division":
        result = num1 / num2;
        break;
      default:
        break;
    }
    setResult({ [operation]: result });
  };
return(
<div>
        <input
          value={inputs.number1}
          name="number1"
          placeholder="number1"
          onChange={(e) => setInputs({ ...inputs, number1: e.target.value })}
        />
        <input
          value={inputs.number2}
          name="number2"
          placeholder="number2"
          onChange={(e) => setInputs({ ...inputs, number2: e.target.value })}
        />
        <button onClick={() => onSubmit("addition")}>ADD</button>
        <button onClick={() => onSubmit("subtraction")}>SUB</button>
        <button onClick={() => onSubmit("multiplication")}>MULTI</button>
        <button onClick={() => onSubmit("division")}>DIVISION</button>
        {result &&
        <div>
          <p>Addition result = {result.addition} </p>
          <p>Subtraction result = {result.subtraction} </p>
          <p>Multiplicaton result = {result.multiplication} </p>
          <p>Division result = {result.division} </p>
          </div>
        }
      </div>
)
}
export default App;