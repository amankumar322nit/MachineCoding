import { useState,useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(50);
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 30
      ) {
        setCount(count + 50);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);
  const element = [];
  for (let i = 0; i < count; i++) {
    element.push(<div key={i}>{i + 1}</div>);
  }

  return <>{element}</>;
}

export default App;
