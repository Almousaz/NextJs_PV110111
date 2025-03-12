'use client';

import { useState } from 'react';

export default function ClientComponent() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Client Component</h2>
      <h3>The value of counter is : {counter}</h3>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
