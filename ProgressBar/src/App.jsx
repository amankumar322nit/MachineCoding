import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

function App() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let tid;
    if (progress < 100) {
      tid = setTimeout(() => {
        setProgress((p) => p + 1);
      }, 20);
    }
    return () => clearTimeout(tid);
  });
  return (
    <>
      <ProgressBar color={"green"} progrss={progress} />
    </>
  );
}

export default App;
