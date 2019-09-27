import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  //   some handler functions
  function handleClick() {
    setCount(count + 1);
  }

  function handleAlertClick() {
    setTimeout(() => {
      alert("you have clicked " + count + "times");
    }, 3000);
  }

  useEffect(() => {
    Document.title = "You clicked me " + count + "times";
  });

  return (
    <div>
      <p>You clicked here {count} times</p>
      <button onClick={handleClick}>Click Here.</button>
      <button onClick={handleAlertClick}>Alert.</button>
    </div>
  );
}

export default Counter;
