import React from "react";
import { render } from "react-dom";
import App from "./components/App.jsx";
import Effects from "./components/Effects.jsx";
import Classical from "./components/Classical.jsx";
import FunctionClassEquiv from "./components/FunctionClassEquiv.jsx";
const MainRenderer = () => {
  return (
    <>
      <App />
      <Effects />
      <Classical />
      <FunctionClassEquiv />
    </>
  );
};

render(<MainRenderer />, document.getElementById("app"));
