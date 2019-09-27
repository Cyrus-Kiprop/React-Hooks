import React, { useState, useEffect } from "react";

const Dependencies = ({ name }) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  const handleAlertClick = () => {
    alert(`You clicked the button ${count} times`);
  };
  //  We must provide react with a dependency array to avoid unneccessary re-renders
  useEffect(() => {
    Document.title = "Hello " + name;
  });

  return (
    <div>
      <p>You clicked here {count} times</p>
      <button onClick={handleClick}>Click Here.</button>
      <button onClick={handleAlertClick}>Alert.</button>
    </div>
  );
};

export default Dependencies;
