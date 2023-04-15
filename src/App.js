import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
//import Counter from './components/Counter';
import TextUtils from "./components/TextUtils";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark Mode Enabeld", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabeld", "success");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Counter heading="You Clicked me " /> */}
      <Alert alert={alert} />
      <TextUtils showAlert={showAlert} />
    </>
  );
}

export default App;
