import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const emptyArray = ["", "", "", ""];
  const [inputs, setInputs] = useState(emptyArray);
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  useEffect(() => {
    refs[0].current.focus();
  }, []);
  const handleOnKeyDown = (e, i) => {
    if (e.keyCode === 8) {
      const copyInputs = [...inputs];
      copyInputs[i] = "";
      setInputs(copyInputs);
      if (i > 0) {
        refs[i - 1].current.focus();
      }
    }
  };
  const handelPaste = (e) => {
    const data = e.clipboardData.getData("text");
    if (data.length === 4) {
      setInputs(data.split(""));
      refs[3].current.focus();
    }
  };

  const handleInputChange = (e, index) => {
    const val = e.target.value;
    console.log(val, index);
    if (!Number(val)) return;

    if (index < inputs.length - 1) {
      // 1
      refs[index + 1].current.focus();
    }
    const copyInputs = [...inputs];
    copyInputs[index] = val;
    setInputs(copyInputs);
  };
  return (
    <>
      <h1>OTP</h1>
      <div>
        {inputs.map((input, i) => {
          return (
            <input
              value={inputs[i]}
              key={i}
              ref={refs[i]}
              type="text"
              maxLength="1"
              style={{
                height: "30px",
                width: "30px",
                margin: "5px",
                textAlign: "center",
              }}
              onKeyDown={(e) => handleOnKeyDown(e, i)}
              onPaste={handelPaste}
              onChange={(e) => handleInputChange(e, i)}
            />
          );
        })}
      </div>
      <button style={{ backgroundColor: "purple" }}>SUBMIT</button>
    </>
  );
}

export default App;
