import React, { useState } from "react";
import Select from "./components/Select";
import Input from "./components/Input";
import { units } from "./units";

function App() {
  const [result, setResult] = useState(0);

  const [inputValue, setInputValue] = useState(0);
  const [fromValue, setFromValue] = useState(1);
  const [toValue, setToValue] = useState(1);

  const fromHandleChange = (e) => {
    setFromValue(e.target.value);
  };
  const toHandleChange = (e) => {
    setToValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalResult = (fromValue / toValue) * inputValue;
    setResult(finalResult);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="converter-form">
          <Input
            label="Amount"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <div className="row">
            <Select
              label="From"
              items={units}
              onChange={fromHandleChange}
            ></Select>
            <Select label="To" items={units} onChange={toHandleChange}></Select>
            <button>Convert</button>
          </div>
        </div>

        <div id="result">
          Result is: <span data-testid="result">{result}</span>
        </div>
      </form>
    </>
  );
}

export default App;
