import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  // Introducing some hook effects

  // hooks and event handlers
  function handleAlertClick() {
    setTimeout(() => {
      alert("You clicked on: " + counter);
    }, 3000);
  }

  return (
    <div>
      <p>You have clicked me {counter} times.</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click here.
      </button>
      <button onClick={handleAlertClick}>Show Alert.</button>
    </div>
  );
};

export default Counter;
