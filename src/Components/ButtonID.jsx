import { useEffect, useState } from "react";

export default function Input() {

  const [result, setResult] = useState(0);

  function handleIncClick() {
    setResult(result+1);
  }
  function handleDecClick() {
    setResult(result-1);
  }


  useEffect(() => {
    console.log("useEffect called");
  });

  return (
    <>

      <button onClick={handleIncClick}>Increement </button>

      <button onClick={handleDecClick}>Decreement </button>

      <br />
      <h4>Increement: {result}</h4>

    </>
  );
}
