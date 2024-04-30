import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl  bg-green-400 p-4 rounded-xl mb-4 w-[420px] mx-auto">
        Tailwind Test
      </h1>
      <Card name="Mostafizur" btnText="Click me" />
      <Card name="Rahman" btnText="Visit me" />
    </>
  );
}

export default App;
