import React from 'react'
import { useEffect } from 'react';

function Useeffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count is:", count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Useeffect
