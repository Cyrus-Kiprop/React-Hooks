import React, { useState, useEffect, useRef } from "react";

const FunctionClassEquiv = () => {
  const [count, setCount] = useState(0);

  const latestCount = useRef(count);

  //   console.log(latestCount.current);

  //   handler functions
  const handleClick = () => {
    setCount(count + 1);
  };

  const handleAlertClick = () => {
    alert(`You clicked the button ${latestCount.current} times`);
  };

  useEffect(() => {
    // updates the ref
    latestCount.current = count;
    setTimeout(() => {
      console.log("You clicked the button" + latestCount.current + "times");
    }, 3000);
  });

  return (
    <div>
      <p>You clicked me {count} times</p>
      <button onClick={handleClick}>Click Here.</button>
      <button onClick={handleAlertClick}>Show Alert.</button>
    </div>
  );
};

export default FunctionClassEquiv;
