
import React, { useState } from 'react'
import '../styles/App.css';

function App() {
  const [maxSum, setMaxSum] = useState(50);
  const [rangeA, setRangeA] = useState(0);
  const [rangeB, setRangeB] = useState(50);

  const handleRangeAChange = (event) => {
    const newRangeA = parseInt(event.target.value);
    setRangeA(newRangeA);
    const maxRangeB = maxSum - newRangeA;
    setRangeB(Math.min(maxRangeB, rangeB));
  };

  const handleRangeBChange = (event) => {
    const newRangeB = parseInt(event.target.value);
    setRangeB(newRangeB);
    const maxRangeA = maxSum - newRangeB;
    setRangeA(Math.min(maxRangeA, rangeA));
  };

  return (
    <div>
      <div id="max-sum-holder">
        <label htmlFor="max-sum">Max Sum:</label>
        <input type="number" id="max-sum" value={maxSum} onChange={(event) => setMaxSum(parseInt(event.target.value))} />
      </div>
      <div id="range-a-holder">
        <label htmlFor="range-a">Range A:</label>
        <input type="range" id="range-a" min="0" max={Math.min(rangeB, maxSum)} value={rangeA} onChange={handleRangeAChange} />
        <div id="range-a-value">{rangeA}</div>
      </div>
      <div id="range-b-holder">
        <label htmlFor="range-b">Range B:</label>
        <input type="range" id="range-b" min={Math.max(rangeA, 0)} max={maxSum} value={rangeB} onChange={handleRangeBChange} />
        <div id="range-b-value">{rangeB}</div>
      </div>
      <div id="sum">{rangeA + rangeB}</div>
    </div>
  );
}

export default App;
