import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://reactjs.org",
//     target: "_blank",
//   },
//   children: "Click me to visit React",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);
const anotherUser  = 'chai aur react';
const reactElement = React.createElement(
  "a",
  { href: "http://google.com", target: "_blank" },
  "click me to visit google !!!",
  anotherUser
);


ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
