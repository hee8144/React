import { useState } from "react";

function App() {
  // let stateNum = useState(1);
  // let value = stateNum[0]; //1
  // let setValue = stateNum[1]; //함수
  let [value, setValue] = useState(1);

  function increseNum() {
    setValue(value + 1);
  }
  function decreaseNum() {
    setValue(value - 1);
  }
  return (
    <>
      <div>
        현재숫자 : {value} {value >= 5 ? "(큰 숫자)" : "(작은숫자)"}
      </div>
      <div>
        <button
          onClick={() => {
            // setValue(value + 1);
            setValue((prev) => prev + 1);
          }}
        >
          숫자증가!
        </button>
        <button
          onClick={() => {
            setValue(value - 1);
          }}
        >
          숫자감소!
        </button>
      </div>
      <div>
        <button onClick={increseNum}>숫자증가!</button>
        <button onClick={decreaseNum}>숫자감소!</button>
      </div>
    </>
  );
}

export default App;
