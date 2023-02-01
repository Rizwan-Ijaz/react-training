import { useEffect, useState } from "react";
let a = 0;

export default function Input() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  const handleChangeInput1 = (e) => {
    setValue1(Number(e.target.value));
    a = Number(e.target.value);
  };

  const handleChangeInput2 = (e) => {
    setValue2(Number(e.target.value));
  };

  function handleSumClick() {
    setResult(value1 + value2);
  }

  useEffect(() => {
    console.log("useEffect called");
  });

  return (
    <>
      <input
        type="number"
        placeholder="first value"
        onChange={handleChangeInput1}
      />{" "}
      +{" "}
      <input
        type="number"
        placeholder="2nd value"
        onChange={handleChangeInput2}
      />
      <button onClick={handleSumClick}>Sum</button>
      <button
        onClick={() => {
          a = 10;
          console.log({ a });
        }}
      >
        update value of A
      </button>
      <br />
      <h4>Result: {result}</h4>
      <h4>A: {a}</h4>
    </>
  );
}
