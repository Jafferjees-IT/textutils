import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
//import Counter from './components/Counter';
import TextUtils from "./components/TextUtils";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Counter heading="You Clicked me " /> */}
      <TextUtils />
    </>
  );
}
// Hello Fakhruddin
export default App;
