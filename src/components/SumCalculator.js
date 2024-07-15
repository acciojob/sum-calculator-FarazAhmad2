import React from "react";

const SumCalculator = ({handleSum, val, sum}) => {
  return (
    <div>
      <h1>Sum Calculator</h1>
      <input onChange={handleSum} type="number" value={val} />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;
