import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>This is simple counter app</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h3>{count}</h3>
      <button onClick={() => setCount(count - 1)}>-</button>;
    </>
  );
}

//this is simple counter app made usi8ng reacts useState hook. useState is a hook used to change values without re rendering.
