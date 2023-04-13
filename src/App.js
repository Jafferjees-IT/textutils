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
    } else setMode("light");
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
