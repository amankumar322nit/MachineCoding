import { useEffect, useState } from "react";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [timerId, setTimerId] = useState(0);

  const handelReset = () => {
    setIsStart(false);
    setHour(0);
    setMin(0);
    setSec(0);
    clearTimeout(timerId);
    setIsPaused(false);
  };

  const runTimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSec((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMin((m) => m - 1);
      setSec(59);
    } else if (min === 0) {
      setHour((h) => h - 1);
      setMin(59);
      setSec(59);
    }

    if (sec === 0 && min === 0 && hr === 0) {
      // resetTimer();
      handelReset();
      alert("Timer is finished");
      clearInterval(tid);
      return;
    }
  };
  const handleResume = () => {
    setIsPaused(false);
    runTimer(sec, min, hour);
  };
  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(sec, min, hour, tid);
      }, 1000);
      setTimerId(tid);
    }

    return () => {
      clearInterval(tid);
    };
  }, [isStart, hour, min, sec]);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <input
          type="Number"
          value={hour}
          onChange={(e) => {
            setHour(e.target.value);
          }}
        />
        <input
          type="Number"
          value={min}
          onChange={(e) => {
            setMin(e.target.value);
          }}
        />
        <input
          type="Number"
          value={sec}
          onChange={(e) => {
            setSec(e.target.value);
          }}
        />
      </div>
      {isStart ? (
        <div style={{ display: "flex" }}>
          <button onClick={isPaused ? handleResume : handlePause}>
            {" "}
            Pause{" "}
          </button>
          <button onClick={handelReset}> Reset </button>
        </div>
      ) : (
        <button onClick={() => setIsStart(true)}> Start </button>
      )}
    </>
  );
}

export default App;
