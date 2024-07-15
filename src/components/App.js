import React, { useEffect, useState } from "react";
import SumCalculator from "./SumCalculator";

const App = () => {
  const [val, setVal] = useState('');
  const [sum, setSum] = useState(0);

  const handleSum = (e) => {
    const newNum = +e.target.value;
    setVal(newNum);
    setSum(sum + newNum);
  };

  
  
  return (
    <div>
      <SumCalculator handleSum={handleSum} val={val} sum={sum} />
    </div>
  );
};

export default App;