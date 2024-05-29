import React, { useState } from 'react';

function SwapNumbers() {
  const [numbers, setNumbers] = useState({ num1: 5, num2: 10 });

  const swap = () => {
    setNumbers({ num1: numbers.num2, num2: numbers.num1 });
  };

  return (
    <div>
      <p>Number 1: {numbers.num1}</p>
      <p>Number 2: {numbers.num2}</p>
      <button onClick={swap}>Swap Numbers</button>
    </div>
  );
}

export default SwapNumbers;
