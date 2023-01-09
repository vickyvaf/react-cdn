"use strict";
import Homepage from "./pages/Homepage.js";

const App = () => {
  return Homepage();
};

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));
