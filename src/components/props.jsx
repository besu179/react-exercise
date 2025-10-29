import { useState } from "react";

export default function Parent() {
  const [msg, setMsg] = useState("parent");
  const changeState = () => {
    setMsg("child");
  };
  return (
    <>
      this is from {msg}
      <Child onStateChange={changeState} />
    </>
  );
}
function Child({ onStateChange }) {
  return <button onClick={onStateChange}>change</button>;
}

// props in react are passed from parent to child