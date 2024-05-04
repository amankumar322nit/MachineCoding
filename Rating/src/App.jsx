import { useState } from "react";
import "./App.css";

function App() {
  const [rating, setRating] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);

  return (
    <>
      {[1, 2, 3, 4, 5].map((num) => {
        return (
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
            key={num}
            onMouseOver={() => setHoverStar(num)}
            onMouseLeave={() => setHoverStar(rating)}
            onClick={() => setRating(num)}
          >
            {hoverStar >= num ? <span>&#9733;</span> : <span>&#9734;</span>}
          </button>
        );
      })}
    </>
  );
}

export default App;
