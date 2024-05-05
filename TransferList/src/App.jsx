import { useState } from "react";

import "./App.css";
import Container from "./container";

function App() {
  const [leftLists, setLeftLists] = useState([1, 2, 3, 4]);
  const [rightLists, setRightLists] = useState([]);
  const [moveableLists, setMoveableLists] = useState([]);

  const handelMove = (x) => {
    return () => setMoveableLists([...moveableLists, x]);
  };
  const handelRight = () => {
    const fil = leftLists.filter((x) => {
      return !moveableLists.includes(x);
    });
    console.log(fil);
    setLeftLists(fil);
    setRightLists([...rightLists, ...moveableLists]), setMoveableLists([]);
  };
  const handelLeft = () => {
    const fil = rightLists.filter((x) => {
      return !moveableLists.includes(x);
    });
    setRightLists(fil);
    setLeftLists([...leftLists, ...moveableLists]), setMoveableLists([]);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        lists={leftLists}
        moveableLists={moveableLists}
        handelMove={handelMove}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          disabled={
            !leftLists.some((element) => moveableLists.includes(element))
          }
          onClick={handelRight}
        >
          Right
        </button>
        <button
          disabled={
            !rightLists.some((element) => moveableLists.includes(element))
          }
          onClick={handelLeft}
        >
          Left
        </button>
      </div>
      <Container
        lists={rightLists}
        moveableLists={moveableLists}
        handelMove={handelMove}
      />
    </div>
  );
}

export default App;
